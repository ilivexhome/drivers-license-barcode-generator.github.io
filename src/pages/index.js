import React, { Component } from 'react'
import Layout from '../components/layout'
import FirstNameInput from '../components/first-name-input'
import MiddleNameInput from '../components/middle-name-input'
import LastNameInput from '../components/last-name-input'
import EyeColorInput from '../components/eye-color-input'
import HeightInput from '../components/height-input'
import TextInput from '../components/text-input'
import DateInput from '../components/date-input'

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

const HEIGHT_UNIT_OPTIONS = ['in', 'cm']

export default class IndexPage extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  _handleHeightValueChange = (value) => {
    console.log(value);
  }

  _handleHeightUnitChange = (unit) => {
    console.log(unit);
  }

  _handleEyeColorChange = (eyeColor) => {
    this.setState({
      eyeColor,
    });
  }

  _handleFirstNameChange = (firstName) => {
    this.setState({
      firstName,
    });
  }

  _handleDateOfBirthChange = (value) => {
    this.setState({
      dateOfBirth: value,
    });
  }

  _handleAddressStreet1Change = (value) => {
    this.setState({
      addressStreet1: value,
    });
  }

  _handleDocumentExpirationDateChange = (value) => {
    this.setState({
      documentExpirationDate: value,
    })
  }

  _handleMiddleNameChange = (middleName) => {
    this.setState({
      middleName,
    });
  }

  _handleLastNameChange = (lastName) => {
    this.setState({
      lastName,
    });
  }

  _handleDocumentDiscriminatorChange = (documentDiscriminator) => {
    this.setState({
      documentDiscriminator,
    });
  }

  _handleJurisdictionVehicleClassChange = (jurisdictionSpecificVehicleClass) => {
    this.setState({
      jurisdictionSpecificVehicleClass,
    });
  }

  _renderHeightInput() {
    return (
      <HeightInput
        onUnitChange={this._handleHeightUnitChange}
        onValueChange={this._handleHeightValueChange}
        unit={this.state.heightUnit}
        unitOptions={HEIGHT_UNIT_OPTIONS}
        value={this.state.heightValue}
      />
    );
  }

  _renderEyeColorInput() {
    return (
      <EyeColorInput
        onChange={this._handleEyeColorChange}
        selected={this.state.eyeColor}
        options={EYE_COLOR_OPTIONS}
      />
    );
  }

  _renderDebug() {
    return (
      <pre>{JSON.stringify(this.state)}</pre>
    )
  }

  _renderFirstNameInput() {
    return (
      <FirstNameInput
        onChange={this._handleFirstNameChange}
        value={this.state.firstName}
      />
    );
  }

  _renderMiddleNameInput() {
    return (
      <MiddleNameInput
        onChange={this._handleMiddleNameChange}
        value={this.state.middleName}
      />
    );
  }

  _renderLastNameInput() {
    return (
      <LastNameInput
        onChange={this._handleLastNameChange}
        value={this.state.lastName}
      />
    );
  }

  _renderDocumentDiscriminatorInput() {
    return (
      <TextInput
        label={'Document Discriminator'}
        onChange={this._handleDocumentDiscriminatorChange}
      />
    )
  }

  _renderJurisdictionSpecificVehicleClassInput() {
    return (
      <TextInput
        label={'Jurisdiction Specific Vehicle Class'}
        onChange={this._handleJurisdictionVehicleClassChange}
      />
    )
  }

  _renderJurisdictionSpecificRestrictionCodesInput() {
    return null; // TODO
  }

  _renderJurisdictionSpecificEndorsementCodesInput() {
    return null; // TODO
  }

  _renderDocumentExpirationDateInput() {
    return (
      <DateInput
        label={'Document Expiration Date'}
        onChange={this._handleDocumentExpirationDateChange}
      />
    );
  }

  _renderDateOfBirthInput() {
    return (
      <DateInput
        label={'Date of Birth'}
        onChange={this._handleDateOfBirthChange}
      />
    );
  }

  _renderPhysicalDescriptionSexInput() {
    return null; // TODO
  }

  _renderAddressStreet1Input() {
    return (
      <TextInput
        label={'Address'}
        onChange={this._handleAddressStreet1Change}
      />
    );
  }

  render () {
    return (
      <Layout>
        {this._renderDebug()}
        <form>
          {this._renderJurisdictionSpecificVehicleClassInput()}
          {this._renderJurisdictionSpecificRestrictionCodesInput()}
          {this._renderDocumentExpirationDateInput()}
          {this._renderFirstNameInput()}
          {this._renderMiddleNameInput()}
          {this._renderPhysicalDescriptionSexInput()}
          {this._renderAddressStreet1Input()}
          {this._renderLastNameInput()}
          {this._renderEyeColorInput()}
          {this._renderDateOfBirthInput()}
          {this._renderDocumentDiscriminatorInput()}
          {this._renderHeightInput()}
          <input type="submit" value="Generate Barcode" className="btn btn-primary" />
        </form>
      </Layout>
    )
  }
}
