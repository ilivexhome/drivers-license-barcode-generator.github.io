import React, { Component } from 'react'
import TextInput from './text-input'

export default class DocumentDiscriminatorInput extends Component {
  render () {
    return (
      <TextInput
        maxlength={25}
        {...this.props}
      />
    )
  }
}
