const AppError = require('../output/enums/AppError')
const indexOf = require('../output/utils/indexOf')

describe('indexOf()', () => {
    it('should return the index of the provided character (first occurance) in a string', () => {
          let src = 'Farabi'
          let searchingChar = 'a'
          
          expect(indexOf(src, searchingChar)).toBe(src.indexOf(searchingChar))
    })

    it('should return the index of the provided element (first occurance) in a array', () => {
        let src = ["Hello", "Hi", "WOrld", 'Hi']
        let searchingElement = 'Hi'
        expect(indexOf(src, searchingElement)).toBe(src.indexOf(searchingElement))
    })


    it('should return an error if `src` is not an array or string', () => {
        const errorValues = [{}, 5, true]
        let error

        errorValues.forEach((value) => {
            error = indexOf(value)
            expect(error.message).toBe(AppError["ONLY_STRING_AND_ARRAY_ACCEPTED"])
        })
    })
})