const AppError = require('../enums/AppError')
const reverseArray = (array: any[] = []) => {
    if(!(array instanceof Array)) {
        throw new Error(AppError.ONLY_ACCEPT_ARRAY)
    }

    let temp
    for(let i = 0; i < array.length / 2; i++) {
         temp = array[i]
         array[i] = array[array.length - i - 1]
         array[array.length - i - 1] = temp
    }
    
}

module.exports = reverseArray