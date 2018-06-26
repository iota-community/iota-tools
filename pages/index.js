import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Layout from '../components/layout'
import Query from '../libs/query'

import Ticker from '../libs/tickers'
import List from '../components/list'
import listData from '../libs/tools.json'

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const tickers = await Ticker.getData()
    const header = await Query('data/calc')
    return { query, tickers, header }
  }

  render() {
    var { mast, subMast } = this.props.header
    return (
      <Layout>
        <Head>
          <title>List of IOTA Tools 😉 - IOTA Tools</title>
          <meta
            name="description"
            content="List of tools that can be used to inspect, view, promote, update, download & remix IOTA stuff"
          />
        </Head>
        <Header>
          {mast && <Mast>{mast}</Mast>}
          {subMast && <SubMast>{subMast}</SubMast>}
        </Header>
        <List {...listData} />
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
