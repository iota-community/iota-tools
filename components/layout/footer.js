import styled from "styled-components";

export default props => (
  <Footer>
    <div>
      iota.tools
    </div>
    <SubText>
      {props.market
        ? <div>
            {" "}Market Cap: $
            {Math.ceil(props.market).toLocaleString()}
            {" "}
            USD{" "}
          </div>
        : null}

    </SubText>
  </Footer>
);

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 1rem;
  padding: 1.5rem;
  background: palevioletred;
  @media (max-width: 1024px) {
    flex-direction: column;
  	background: palevioletred;
  }
`;
const SubText = styled.div`
  font-size: 12px;
`;
