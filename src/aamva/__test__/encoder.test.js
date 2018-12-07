import Encoder from '../encoder'

describe('Encoder', () => {
  it('works', () => {
    const encoder = new Encoder({
      firstName: 'KYLE'
    })

    expect(encoder.toString()).toEqual('SOME STRING')
  })
})
