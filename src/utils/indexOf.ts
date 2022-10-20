const AppError = require('../enums/AppError')
const indexOf = (src: string | any[], value: any): number => {
    if(typeof src === 'string') {
        return src.indexOf(value)
    }

    if(src instanceof Array) {
        return src.indexOf(value)
    }

    throw new Error(AppError.ONLY_STRING_AND_ARRAY_ACCEPTED)
}

module.exports = indexOf