import React, { Component } from 'react'
import Layout from '../components/layout'
import FirstNameInput from '../components/first-name-input'
import MiddleNameInput from '../components/middle-name-input'
import LastNameInput from '../components/last-name-input'
import EyeColorInput from '../components/eye-color-input'
import HeightInput from '../components/height-input'
import TextInput from '../components/text-input'
import DateInput from '../components/date-input'
import DocumentDiscriminatorInput from '../components/document-discriminator-input'

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
      <DocumentDiscriminatorInput
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
      <div className={'col'}>
        <TextInput
          label={'Address'}
          onChange={this._handleAddressStreet1Change}
        />
      </div>
    );
  }

  _renderAddressCityInput() {
    return (
      <TextInput
        label={'City'}
        onChange={this._handleAddressCityChange}
        value={this.state.addressCity}
      />
    );
  }

  _renderAddressJurisdictionCodeInput() {
    return (
      <TextInput
        label={'Country'}
        onChange={this._handleAddressJurisdictionCodeChange}
        value={this.state.addressJurisdictionCode}
      />
    )
  }

  _renderDemographicInputs() {
    return (
      <>
      <h2>Demographics</h2>
      <div className={'row'}>
      <div className={'col'}>
        {this._renderHeightInput()}
      </div>
      <div className={'col'}>
        {this._renderEyeColorInput()}
      </div>

      </div>
      </>
    )
  }

  _renderAddressPostalCodeInput() {
    return (
      <div className={'col'}>
      <TextInput
        label={'Postal Code'}
      />
      </div>
    );
  }

  _renderCountryIdentificationInput() {
    return null; // TODO
  }

  _renderAddressInputs() {
    return (
      <div className="row">
        {this._renderAddressStreet1Input()}
        {this._renderAddressCityInput()}


        <div className="col">
          {this._renderAddressPostalCodeInput()}
        </div>

        <div className="col">
          {this._renderAddressJurisdictionCodeInput()}
        </div>

      </div>
    );
  }

  _renderCustomerIDNumberInput() {
    return null; // TODO
  }

  _renderDocumentIssueDateInput() {
    return (
      null
    );
  }

  _renderNameInputs() {
    return (
      <div className="row">
      <div className="col">
      {this._renderFirstNameInput()}
      </div>
      <div className="col">
      {this._renderMiddleNameInput()}
      </div>
      <div className="col">
      {this._renderLastNameInput()}
      </div>
      </div>
    )
  }

  _renderSubmitInput() {
    return (
      <input
        disabled={!this._isFormValid()}
        type="submit"
        value="Generate Barcode"
        className="btn btn-primary"
      />
    )
  }

  _isFormValid() {
    if (!this.state.firstName) {
      return false;
    }


    return true;
  }

  render() {
    return (
      <Layout>
        {this._renderDebug()}
        <form>
        {this._renderNameInputs()}

          {this._renderJurisdictionSpecificVehicleClassInput()}
          {this._renderJurisdictionSpecificRestrictionCodesInput()}
          {this._renderDocumentExpirationDateInput()}
          {this._renderPhysicalDescriptionSexInput()}

          {this._renderCountryIdentificationInput()}

          {this._renderCustomerIDNumberInput()}

          {this._renderAddressInputs()}

          {this._renderDemographicInputs()}

          {this._renderDateOfBirthInput()}
          {this._renderDocumentDiscriminatorInput()}

          {this._renderSubmitInput()}
        </form>
      </Layout>
    )
  }
}
