import Encoder from '../encoder'

describe('Encoder', () => {
  describe('DataElement', () => {
    describe('toString', () => {
      describe('DAC', () => {
        describe('when the value to too long', () => {
          it('truncates correctly', () => {
            const dataElement = new Encoder.DataElement({
              elementID: 'DAC',
              value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
            });

            expect(dataElement.toString()).toEqual('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN')
          });
        });
      });

      it('works', () => {
        const dataElement = new Encoder.DataElement({
          elementID: 'DAC',
          value: 'KYLE'
        });

        expect(dataElement.toString()).toEqual('KYLE')
      });
    });
  })

  // it('works', () => {
  //   const encoder = new Encoder({
  //     jurisdictionSpecificVehicleClass: '',
  //     jurisdictionSpecificRestrictionCodes: '',
  //     jurisdictionSpecificEndorsementCodes: '',
  //     documentExpirationDate: '20180101',
  //     customerFamilyName: 'DECOT',
  //     customerFirstName: 'KYLE',
  //     customerMiddleNames: '',
  //     documentIssueDate: '20170101',
  //   })
  //
  //   expect(encoder.toString()).toEqual('@\n\r\ANSI')
  // })
})
