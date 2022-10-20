const AppError = require('../enums/AppError')
const charToAscii = (char: string) => {
    if(typeof char !== 'string') {
        throw new Error(AppError.ONLY_ACCEPTED_STRING)
    }
    return char.charCodeAt(0)
}

module.exports = charToAscii