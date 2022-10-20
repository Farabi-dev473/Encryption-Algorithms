const removeArrayElement = require('../output/utils/removeArrayElement')
const AppError = require('../output/enums/AppError')
const indexOf = require('../output/utils/indexOf')

// Integration test
describe('removeArrayElement()', () => {
    it('should remove the specified element from the array', () => {
        let acctualArray = [1, 2, 3, 4, 5]
        let expectedArray = [1, 2, 4, 5]
        let element = 3
        removeArrayElement(acctualArray, element)
        expect(acctualArray).toEqual(expectedArray)
    })
})