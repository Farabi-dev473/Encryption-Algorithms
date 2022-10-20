const verify = require('../output/verify')
const encode = require('../output/encode')
const decode = require('../output/decode')
const AppError = require('../output/enums/AppError')

// Integration Test
describe('verify()', () => {
    it('should return `true` if encoded & decoded strings are equal', () => {
        let str = 'Software Engineer'
        let encodedStr = encode(str)
        let decodedStr = decode(encodedStr)

        expect(verify(decodedStr, encodedStr)).toBeTruthy()
    })
})