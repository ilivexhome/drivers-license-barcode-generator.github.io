import React, { Component } from 'react'
import Layout from '../components/layout'
import FirstNameInput from '../components/first-name-input'
import MiddleNameInput from '../components/middle-name-input'
import LastNameInput from '../components/last-name-input'

export default class IndexPage extends Component {
  render () {
    return (
      <Layout>
        <form>
          <FirstNameInput onChange={(value) => console.log(value)} />
          <MiddleNameInput onChange={(value) => console.log(value)} />
          <LastNameInput onChange={(value) => console.log(value)} />

          <input type="submit" value="Generate Barcode" className="btn btn-primary" />
        </form>
      </Layout>
    )
  }
}
