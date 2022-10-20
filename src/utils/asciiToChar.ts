const AppError = require('../enums/AppError')
const asciiToChar = (ascii: number) => {
    if(typeof ascii !== 'number') {
        throw new Error(AppError.ONLY_NUMBER_ACCEPTED)
    }

    return String.fromCharCode(ascii)
}

module.exports = asciiToChar