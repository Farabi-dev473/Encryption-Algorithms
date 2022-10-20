const charToAscii = require('../output/utils/charToAscii')
const AppError = require('../output/enums/AppError')

describe('charToAscii()', () => {
    it('should return the ascii value of the provided cahracter', () => {
        let input = 'A'
        let output = 65
        
        expect(charToAscii(input)).toBe(output)
    })

    it('should return an error if string is not provided', () => {
        const errorValues =  [[] , {}, 5, true]
        let error
        errorValues.forEach((value) => {
          error = charToAscii(value)
          expect(error.message).toBe(AppError["ONLY_ACCEPTED_STRING"])
        })
    })
})