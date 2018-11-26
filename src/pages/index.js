import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import FirstNameInput from '../components/first-name-input';

export default class IndexPage extends Component {
  _handleFirstNameInputChange = (value) => {

    console.warn(value)
  }

  render () {
    return (
      <Layout>
        <form>
          <FirstNameInput onChange={this._handleFirstNameInputChange} />


          <input type="submit" value="Generate Barcode" className="btn btn-primary" />
        </form>

        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}
