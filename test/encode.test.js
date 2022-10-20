const encode = require('../output/encode')
const AppError = require('../output/enums/AppError')

// Integration test
describe('encode()', () => {
    it('should contain a `,` in the output', () => {
        let name = 'Al Farabi Sajon'
        expect(encode(name)).toContain(',')
    })

    it('should return an encrypted version of the provided string', () => {
        let txt = 'something'
        let encryptedTxt = '*/19)6507,utsrqpo'
        expect(encode(txt)).toBe(encryptedTxt)
    })

    it('should return an error if string is not provided', () => {
        const errorValues = [{}, [], 5, true]
        let error

        errorValues.forEach((value) => {
            error = encode(value)
            expect(error.message).toBe(AppError["ONLY_ACCEPTED_STRING"])
        })
    })
})