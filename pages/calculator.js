import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Layout from '../components/layout'
import Query from '../libs/query'

import Ticker from '../libs/tickers'
import Calc from '../components/calculator'

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const tickers = await Ticker.getData()
    const header = await Query('data/calc')
    return { query, tickers, header }
  }

  render() {
    var { mast, subMast } = this.props.header
    var { tickers } = this.props
    return (
      <Layout>
        <Head>
          <title>Live market prices - IOTA Tools</title>
          <meta
            name="description"
            content="Live market data for IOTA token cryptocurrency and other cryptocoins"
          />
        </Head>
        <Header>
          {mast && <Mast>{mast}</Mast>}
          {subMast && <SubMast>{subMast}</SubMast>}
        </Header>

        <Calc {...tickers} />
      </Layout>
    )
  }
}

const Header = styled.div`
  margin: 40px;
  margin-bottom: 10%;
`

const Mast = styled.h2``

const SubMast = styled.p``
