"use strict";
const AppError = require('../enums/AppError');
const charToAscii = (char) => {
    if (typeof char !== 'string') {
        return new Error(AppError.ONLY_ACCEPTED_STRING);
    }
    return char.charCodeAt(0);
};

module.exports = charToAscii;
