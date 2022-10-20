const AppError = require('./enums/AppError') 
const asciiToChar = require('./utils/asciiToChar')
const indexOf = require('./utils/indexOf')

const decode = (encryptedStr: string) => {
    if(typeof encryptedStr !== 'string') {
        throw new Error(AppError.ONLY_ACCEPTED_STRING)
    }
    let end = indexOf(encryptedStr, ',')
    let acctualStr = ''
    let ascii 
    for(let i = 0; i < end; i++) {
      ascii = indexOf(characters, encryptedStr[i]) + 32 
      acctualStr += asciiToChar(ascii)
    }
    return acctualStr
}

module.exports = decode