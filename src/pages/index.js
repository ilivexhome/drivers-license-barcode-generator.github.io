import React, { Component } from 'react'
import Layout from '../components/layout'
import FirstNameInput from '../components/first-name-input'
import MiddleNameInput from '../components/middle-name-input'
import LastNameInput from '../components/last-name-input'
import EyeColorInput from '../components/eye-color-input'

const EYE_COLOR_OPTIONS = [
  'Hazel',
  'Blue',
  'Brown'
]

export default class IndexPage extends Component {
  render () {
    return (
      <Layout>
        <form>
          <FirstNameInput onChange={(value) => console.log(value)} />
          <MiddleNameInput onChange={(value) => console.log(value)} />
          <LastNameInput onChange={(value) => console.log(value)} />
          <EyeColorInput options={EYE_COLOR_OPTIONS} />

          <input type="submit" value="Generate Barcode" className="btn btn-primary" />
        </form>
      </Layout>
    )
  }
}
