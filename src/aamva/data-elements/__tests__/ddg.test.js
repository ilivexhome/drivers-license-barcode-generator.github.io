import DDG from '../ddg'

describe('DDG', () => {
  describe('toString', () => {
    describe('when true', () => {
      it('works', () => {
        const dataElement = new DDG(true)

        expect(dataElement.toString()).toEqual('T')
      })
    })

    describe('when false', () => {
      it('works', () => {
        const dataElement = new DDG(false)

        expect(dataElement.toString()).toEqual('N')
      })
    })

    describe('when neither true or false', () => {
      it('works', () => {
        const dataElement = new DDG(null)

        expect(dataElement.toString()).toEqual('U')
      })
    })
  })
})
