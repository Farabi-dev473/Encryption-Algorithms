const reverseArray = require('../output/utils/reverseArray')
const AppError = require('../output/enums/AppError')

let acctual, expected

describe('reverseArray()', () => {
    it(`should reverse the provided array`, () => {
        acctual = [1, 2, 3, 4, 5]
        expected = [5, 4, 3, 2, 1]
        reverseArray(acctual)
        expect(acctual).toEqual(expected)
    })

    it('should throw in error if array is not provided', () => {

          const errorValues = ['', {}, 5]
          let error
          errorValues.forEach((errorValue) => {
            error = reverseArray(errorValue)
            expect(error.message).toBe(AppError["ONLY_ACCEPT_ARRAY"])
          })
    })
    
})