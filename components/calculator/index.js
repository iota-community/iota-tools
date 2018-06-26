import React from "react";
import styled from "styled-components";
import conv from "../../libs/converter";
import Ticker from "../../libs/tickers";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      left: 1,
      leftPrefix: "M",
      leftCoin: "iota",
      right: 1,
      rightPrefix: "",
      rightCoin: "usd"
    };
  }

  componentDidMount() {
    this.calculate(this.state, "left");
  }

  handleLeft = event => {
    var state = this.state;
    state.left = event.target.value;
    this.calculate(state, "left");
  };
  handleLeftPrefix = event => {
    var state = this.state;
    state.leftPrefix = event.target.value;
    this.calculate(state, "left");
  };
  handleLeftCoin = event => {
    var state = this.state;
    state.leftCoin = event.target.value;
    this.calculate(state, "left");
  };
  handleRight = event => {
    var state = this.state;
    state.right = event.target.value;
    this.calculate(state, "right");
  };
  handleRightPrefix = event => {
    var state = this.state;
    state.rightPrefix = event.target.value;
    this.calculate(state, "left");
  };
  handleRightCoin = event => {
    var state = this.state;
    state.rightCoin = event.target.value;
    if (event.target.value === "usd") state.rightPrefix = " ";
    this.calculate(state, "left");
  };

  calculate = (state, side) => {
    if (state.leftCoin === "usd" || state.rightCoin === "usd") {
      if (side === "left") {
        state.right = Ticker.sigFigs(
          state.left *
            conv(this.props[state.leftCoin].price_btc, state.leftPrefix) *
            conv(this.props["bitcoin"].price_usd, state.rightPrefix),
          4
        );
      }
      // NEED TO FIX TO ALLOW FOR USD ON LEFT
      //   else {
      //     state.left =
      //       state.right *
      //       conv(this.props[state.leftCoin].price_btc, state.leftPrefix) /
      //       conv(this.props[state.rightCoin].price_btc, state.rightPrefix);
      //   }
    } else {
      if (side === "left") {
        state.right = Ticker.sigFigs(
          state.left *
            conv(this.props[state.leftCoin].price_btc, state.leftPrefix) /
            conv(this.props[state.rightCoin].price_btc, state.rightPrefix),
          4
        );
      } else {
        state.left = Ticker.sigFigs(
          state.right *
            conv(this.props[state.leftCoin].price_btc, state.leftPrefix) /
            conv(this.props[state.rightCoin].price_btc, state.rightPrefix),
          4
        );
      }
    }

    this.setState(state);
  };

  render() {
    var {
      left,
      leftPrefix,
      leftCoin,
      right,
      rightPrefix,
      rightCoin
    } = this.state;
    return (
      <Wrapper>
        <Input type="number" value={left} onChange={this.handleLeft} />
        <SelectWrapper>
          <CoinSelect value={leftPrefix} onChange={this.handleLeftPrefix}>
            <option value="T">T</option>
            <option value="G">G</option>
            <option value="M">M</option>
            <option value="K">K</option>
            <option value=" ">•</option>
          </CoinSelect>
          <CoinSelect value={leftCoin} onChange={this.handleLeftCoin}>
            <option value="iota">IOTA</option>
            <option value="bitcoin">BTC</option>
            <option value="ethereum">ETH</option>
            <option value="ripple">XRP</option>
          </CoinSelect>
        </SelectWrapper>
        <Equal>
          =
        </Equal>
        <Input type="number" value={right} onChange={this.handleRight} />
        <SelectWrapper>
          <CoinSelect value={rightPrefix} onChange={this.handleRightPrefix}>
            <option value=" ">•</option>
            <option value="m">m</option>
            <option value="u">μ</option>
            <option value="n">n</option>
          </CoinSelect>
          <CoinSelect value={rightCoin} onChange={this.handleRightCoin}>
            <option value="iota">IOTA</option>
            <option value="bitcoin">BTC</option>
            <option selected value="usd">USD</option>
            <option value="ethereum">ETH</option>
            <option value="ripple">XRP</option>
          </CoinSelect>
        </SelectWrapper>

      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
    color: white;
    display: flex;
    @media (max-width: 1024px) {
      flex-direction: column;
  	// background: palevioletred;
  	}
`;

const SelectWrapper = styled.div`
    display: flex;
    @media (max-width: 1024px) {
      padding: 10px 0px;
      justify-content: flex-end;
  	}
`;
const Equal = styled.div`
    padding: 0px 20px;
    font-size: 3rem;
    text-align: center;
    @media (max-width: 1024px) {
        width:100%;
        display:none;
  	}
`;
const Input = styled.input`
    color: white;
    background: none;
    text-align: right;
    margin: 0px 10px;
    border: none;
    border-bottom: 3px solid white;
    height: auto;
    width: 200px;
    font-size: 1.5rem;
    border-radius: 0px;
    padding: .5rem;
      -webkit-appearance: none; 
    &:focus{
        outline: none;
    }
`;

const CoinSelect = styled.select`
    appearance: none;
    text-align-last:center;
    margin: 0px 2px;
    color: white;
    background: rgba(255,255,255,.3);
    text-align: center;
    border: none;
    height: auto;
    width: auto;
    font-size: 1.5rem;
    border-radius: 0px;
    padding: .5rem;
`;
