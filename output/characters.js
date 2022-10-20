"use strict";
const removeArrayElement = require('./utils/removeArrayElement');
const reverseArray = require('./utils/reverseArray');
let characters = [...Array(95).keys()].map(i => String.fromCharCode(i + 32));
removeArrayElement(characters, ',');
reverseArray(characters);
module.exports = characters;
