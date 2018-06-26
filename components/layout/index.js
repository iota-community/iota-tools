import styled, { injectGlobal } from "styled-components";
import React from "react";
import Header from "../header";
import Footer from "./footer";
import Ticker from "../../libs/tickers";

export default class extends React.Component {
  constructor(props) {
    super();
    this.state = {
      crumbs: []
    };
  }

  componentDidMount = async () => {
    var data = await Ticker.getCrumbs();
    var cap = await Ticker.getMarketCap();
    console.log(data);
    console.log(cap);
    this.setState({ crumbs: data, marketCap: cap });
  };

  render() {
    var { crumbs, marketCap } = this.state;
    return (
      <Wrapper>
        <Header crumbs={crumbs} />
        <Content>
          {this.props.children}
        </Content>
        <Footer market={marketCap} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #004f71;
  min-height: 100vh;
`;
const Content = styled.section`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

injectGlobal`
   @font-face {
     font-family: 'Source';
     src: url('/static/fonts/regular.ttf');
  }
  @font-face {
     font-family: 'SourceLight';
     src: url('/static/fonts/light.ttf');
  }
  @font-face {
     font-family: 'SourceBold';
     src: url('/static/fonts/bold.ttf');
  }
  body {
    margin: 0;
    color: #fff;
  }

  div {
    font-family: monospace;
    font-family: Source;
  }
`;
