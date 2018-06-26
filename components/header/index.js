import styled from "styled-components";
import Crumb from "../crumb";
import Nav from "./nav";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background: palevioletred;

    // border-bottom: 1px solid rgba(186, 197, 185, 1);
    @media (max-width: 1024px) {
      flex-direction: column;
  		background: palevioletred;
  	}
`;
const Row = styled.div`
  display: flex;
  align-items:baseline;
  @media (max-width: 1024px) {
  		background:${props => props.second && "#e18aa6"};
  }
`;
const Logo = styled.div`
  font-family: SourceBold;
  font-size: 14px;
  padding: .5rem .5rem;
`;

export default props => (
  <Header>
    <Row>
      <Logo>IOTA Tools</Logo>
      <Nav />
    </Row>
    <Row second>
      {props.crumbs.map((c, index) => <Crumb key={index} {...c} />)}
    </Row>
  </Header>
);
