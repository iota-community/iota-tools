import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Head from "next/head";
import Ticker from "../libs/tickers";
import Calc from "../components/calculator";

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const tickers = await Ticker.getData();
    return { query, tickers };
  }
  state = {
    firstName: "",
    lastName: "",
    email: ""
  };

  submit = (first, last, email) => {
    fetch("https://iotatools-3c5b1.firebaseio.com/signups.json", {
      method: "POST",
      body: JSON.stringify({
        firstName: first,
        lastName: last,
        email: email
      })
    });
    this.setState({ sent: true });
  };

  render() {
    var { tickers } = this.props;
    return (
      <Layout>
        <Head>
          <title>iOS IOTA Wallet by iota.tools</title>
          <meta property="og:title" content="IOTAmobile" />
          <meta
            property="og:description"
            content="A simple iOS IOTA wallet. Send, receive and view IOTA transactions."
          />

          <meta
            property="og:image"
            content="https://iota.tools/static/images/ogimage.jpg"
          />
        </Head>
        <PhoneSection style={{ marginBottom: 100 }}>
          <Side>
            <Title style={{ fontSize: 46, marginBottom: 10 }}>
              IOTAmobile
            </Title>
            <Body
              style={{ fontSize: 14 }}
            >{`A simple wallet for iOS. Send, receive and view IOTA transactions. With easy to use security you'll be able to 
            safely accept payments immediately.`}</Body>
            {/*<Body style={{ fontSize: 10 }}>{`built by Lewis Freiberg`}</Body>*/}
          </Side>
          <Phone src="/static/images/auth.png" />

        </PhoneSection>
        <PhoneSection reverse>
          <Phone src="/static/images/home.png" />
          <Side>
            <Title>View Transcations</Title>
            <Body
            >{`IOTAmobile's simple homepage lets you view and inspect recent transactions on your wallet. 
        See which tramsactions have been sent or received.`}</Body>
            <Body>{`Pull to refresh to update the confirmed 
        status of your transactions.`}</Body>
          </Side>
        </PhoneSection>
        <PhoneSection>
          <Side>
            <Title>Receive funds</Title>
            <Body
            >{`Like the desktop wallet, you can generate new addresses from your stored seed. 
            After generating them you can attach them to the tangle to view transactions relating to them.`}</Body>
            <Body
            >{`It's easy to share your address with clipboard support and an easy QR code for scanning.`}</Body>
          </Side>
          <Phone src="/static/images/receive.png" />
        </PhoneSection>
        <PhoneSection reverse>
          <Phone src="/static/images/send.png" />
          <Side>
            <Title>Send IOTA to anyone</Title>
            <Body
            >{`Once you've attached an address and received some IOTA, it's easy to send it. 
        Simply enter the address, enter the ammount of IOTA and an optional message to be sent with it. Hit send and it's done.`}</Body>
            <Body
            >{`For larger amounts you can use the SI notation for the value you want. It accepts decimals as long as you don't try and send less than one IOTA.`}</Body>
          </Side>
        </PhoneSection>
        <FeaturesContainer>
          <Title>Features</Title>
          <Row>
            <Feature>
              <Row start>
                <Icon src="/static/icons/simple.png" />
                <FTitle>Easy to use</FTitle>
              </Row>
              <div>
                The wallet has been designed to accomodate event the newest
                cryptotoken users. It's simple interface is friendly and easy to
                use.
              </div>
            </Feature>
            <Feature>
              <Row start>
                <Icon src="/static/icons/encrypted.png" />
                <FTitle>Encrypted storage</FTitle>
              </Row>
              <div>
                The wallet incorporates the SJCL and NaCl crypto libraries.
                It stores your encrypted seed in the
                iOS keychain for safe keeping.
              </div>
            </Feature>
            <Feature>
              <Row start>
                <Icon src="/static/icons/logout.png" />
                <FTitle>Auto Logout</FTitle>
              </Row>
              <div>
                Using the built in remember me, the app will logout
                after an amount of time. Letting you switch between apps while
                staying secure.
              </div>
            </Feature>
          </Row>
          <Row>
            <Feature>
              <Row start>
                <Icon src="/static/icons/remote.png" />
                <FTitle>Change nodes</FTitle>
              </Row>
              <div>
                The wallet has a recommended light node for new users. For
                others
                you
                can switch the node before login to a private one.
              </div>
            </Feature>
            <Feature>
              <Row start>
                <Icon src="/static/icons/qr.png" />
                <FTitle>QR codes</FTitle>
              </Row>
              <div>
                The app generates QR codes for addresses. This lets you share
                addresses with ease. A scanner is coming soon!
              </div>
            </Feature>
            <Feature>
              <Row start>
                <Icon src="/static/icons/os.png" />
                <FTitle>Open Source</FTitle>
              </Row>
              <div>
                The whole code base is open source for contribution by the
                community. Feel free
                to review and contribute at{" "}
                <Link href="https://github.com/l3wi/iotaMobile" target="_blank">
                  Github
                </Link>.
              </div>
            </Feature>
          </Row>
        </FeaturesContainer>
        <FormContainer>
          <Title>Sign up to Beta</Title>

          {!this.state.sent
            ? <Form>
                <p style={{ fontSize: 10 }}>
                  There are 250 spots in the Beta.<br /> Support will be
                  coordinated
                  through the IOTA slack in the{" "}
                  <Link
                    href="https://iotatangle.slack.com/messages/C5Z3QGJDT"
                    target="_blank"
                  >
                    #ios-beta
                  </Link>{" "}
                  channel.{" "}
                </p>
                <Text
                  value={this.state.firstName}
                  onChange={text =>
                    this.setState({ firstName: text.target.value })}
                  placeholder="First Name"
                />
                <Text
                  value={this.state.lastName}
                  onChange={text =>
                    this.setState({ lastName: text.target.value })}
                  placeholder="Last Name"
                />
                <Text
                  type="email"
                  value={this.state.email}
                  onChange={text => this.setState({ email: text.target.value })}
                  placeholder="test@test.com"
                />
                <Button
                  onClick={() =>
                    this.submit(
                      this.state.firstName,
                      this.state.lastName,
                      this.state.email
                    )}
                >
                  Signup
                </Button>
                <p style={{ fontSize: 9 }}>
                  The
                  application is in Beta so there are no guarantees whatsoever
                  and
                  it is
                  supplied "as is".{" "}
                </p>
              </Form>
            : <Form>
                <h4 style={{ margin: 10 }}>Thanks for signing up!</h4>
                <p style={{ fontSize: 12 }}>
                  You will recieve an email in the next few days inviting you to
                  testflight. For all other enquiries go to the IOTA slack
                  channel{" "}
                  <Link
                    href="https://iotatangle.slack.com/messages/C5Z3QGJDT"
                    target="_blank"
                  >
                    #ios-beta
                  </Link>.
                </p>
                <div>thanks, lewi 🙊</div>
              </Form>}

        </FormContainer>
      </Layout>
    );
  }
}

const Title = styled.h1`
    font-size: 23px;
`;

const Body = styled.p`
  font-
`;

const Link = styled.a`

    color: white;
`;

const Side = styled.div`  
    display: inline-block;
    margin: 60px 0px 60px 0px;
    max-width: 300px;
`;

const Feature = styled.div`
    flex: 1;
    padding: 20px;
    margin: 0px 10px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
`;

const FTitle = styled.h1`
    font-size: 18px;
`;

const Icon = styled.img`
    width: 35px;
    margin: 0px 10px;
`;

const Form = styled.div`
    width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 3px solid white;
`;
const Button = styled.button`
    width:150px;
    padding: 8px 8px;
    border: none;
    background:#eee;
    color: rgb(0, 79, 113);;
    margin: 5px;
    &:focus {
        outline: none;
    }
    &:active {
        background: palevioletred;
    }
`;

const Text = styled.input`
    width:150px;
    margin: 5px;
    color: white;
    font-family: monospace;
    padding: 2px;
    background: none;
    border: none;
    border-bottom: 2px solid white;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: white;
    }
`;

const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Row = Section.extend`
    width: 90%;
        display: flex;
    max-width: 960px;
    flex-direction: row;
    align-items: ${props => (props.start ? "center" : "flex-start")};
    justify-content: ${props => (props.start ? "flex-start" : "space-around")};
    @media (max-width: 700px) {
        align-items: center;
        justify-content: center;
        flex-direction: ${props => (props.reverse ? "column-reverse" : "column")};
	}
`;

const PhoneSection = Row.extend`
    width:100%;
    display:flex;
    margin: 50px 0px;
`;

const FeaturesContainer = Section.extend`
    padding: 100px 0px;
    width: 100%;
`;

const FormContainer = Section.extend`
    padding: 100px 0px;
    padding-top: 20px;
    width: 100%;
`;

const Phone = styled.img`
    max-height: 500px;
`;
const Logo = styled.img`
    margin: 20px;
    width: 100px;
`;
