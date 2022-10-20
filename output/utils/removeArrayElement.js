"use strict";
const AppError = require('../enums/AppError');
const indexOf = require('./indexOf');
const removeArrayElement = (array = [], valueToSplice) => {
    if (!(array instanceof Array)) {
        throw new Error(AppError.ONLY_ACCEPT_ARRAY);
    }
    let index = indexOf(array, valueToSplice);
    array.splice(index, 1);
};
module.exports = removeArrayElement;
