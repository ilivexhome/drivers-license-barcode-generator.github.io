import React, { Component } from 'react'
import Layout from '../components/layout'
import FirstNameInput from '../components/first-name-input'
import MiddleNameInput from '../components/middle-name-input'
import LastNameInput from '../components/last-name-input'
import EyeColorInput from '../components/eye-color-input'

const EYE_COLOR_OPTIONS = [
  {
    label: 'Hazel',
    hex: '#776536',
    slug: 'hazel'
  },
  {
    label: 'Blue',
    hex: '#a1caf1',
    slug: 'blue'
  },
  {
    label: 'Brown',
    hex: '#603101',
    slug: 'brown'
  }
]

export default class IndexPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      eyeColor: ''
    }
  }

  render () {
    return (
      <Layout>
        <form>
          <FirstNameInput onChange={(value) => console.log(value)} />
          <MiddleNameInput onChange={(value) => console.log(value)} />
          <LastNameInput onChange={(value) => console.log(value)} />
          <EyeColorInput onSelect={(label) => this.setState({ eyeColor: label })} selected={this.state.eyeColor} options={EYE_COLOR_OPTIONS} />

          <input type="submit" value="Generate Barcode" className="btn btn-primary" />
        </form>
      </Layout>
    )
  }
}
