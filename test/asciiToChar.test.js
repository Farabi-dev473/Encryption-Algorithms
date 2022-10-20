const asciiToChar = require('../output/utils/asciiToChar')
const AppError = require('../output/enums/AppError')

describe('asciiToChar()', () => {
    it('should return character of the provided ascii value', () => {
        let input = 65
        let output = 'A'
        expect(asciiToChar(input)).toBe(output)
    })

    it('should return an error if number is not provided as input', () => {
        const errorValues = [{}, [], '', true]
        let error 
        errorValues.forEach((value) => {
        error = asciiToChar(value)
        expect(error.message).toBe(AppError["ONLY_NUMBER_ACCEPTED"])
        })
    })
})