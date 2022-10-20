"use strict";
const AppError = require('../enums/AppError');
const asciiToChar = (ascii) => {
    if (typeof ascii !== 'number') {
        return new Error(AppError.ONLY_NUMBER_ACCEPTED);
    }
    return String.fromCharCode(ascii);
};
module.exports = asciiToChar;
