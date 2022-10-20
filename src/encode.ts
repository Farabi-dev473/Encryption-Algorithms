const AppError = require('./enums/AppError') 
const charToAscii = require('./utils/charToAscii')




const encode = (str: string) => {
    let encryptedStr = ''
    let index
    if(typeof str !== 'string') {
        throw new Error(AppError.ONLY_ACCEPTED_STRING)
    }

    for(let i = 0; i < str.length; i++) {
        index = charToAscii(str[i]) - 32
        encryptedStr += characters[index]
    }

    encryptedStr += ','
  
    for(let i = str.length - 1; i < 15; i++) {
        index = 1 + i
        encryptedStr += characters[index]
    }

    return encryptedStr
}

module.exports = encode
