const decode = require('../output/decode')
const AppError = require('../output/enums/AppError')

// Integration test
describe('decode()', () => {

    it('should return an decoded version of the provided encrypted string', () => {
        let encryptedStr = '*/19)6507,utsrqpo'
        let decodedStr = 'something'
        expect(decode(encryptedStr)).toBe(decodedStr)
    })

    it('should return an error if string is not provided', () => {
        const errorValues = [{}, [], 5, true]
        let error

        errorValues.forEach((value) => {
            error = decode(value)
            expect(error.message).toBe(AppError["ONLY_ACCEPTED_STRING"])
        })
    })
})