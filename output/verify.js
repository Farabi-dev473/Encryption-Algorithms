"use strict";
const AppError = require('./enums/AppError');
const encode = require('./encode');
const decode = require('./decode');
const verify = (decoded, encodedStr) => {
    if (typeof decoded === 'string' && typeof encodedStr === 'string') {
        return decode(encodedStr) === decoded ? true : false;
    }
    throw new Error(AppError.ONLY_ACCEPTED_STRING);
};
module.exports = verify;
