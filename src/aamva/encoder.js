import { truncate } from 'lodash'

class DataElement {
  constructor({ type, value }) {
    this._type = type;
    this._value = value
  }

  toString() {
    return truncate(this._value, {
      length: 40,
      omission: '', 
    });
  }
}

class Encoder {
  constructor(data) {
    this.data = data;
  }

  toString() {
    return "KYLEDECOT";
  }
}

Encoder.DataElement = DataElement

export default Encoder
