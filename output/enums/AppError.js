"use strict";
var ApplicationError;
(function (ApplicationError) {
    ApplicationError["ONLY_ACCEPT_ARRAY"] = "Only array is accepted";
    ApplicationError["ONLY_ACCEPTED_STRING"] = "Only string is accepted";
    ApplicationError["ONLY_STRING_AND_ARRAY_ACCEPTED"] = "Only string and array are accepted";
    ApplicationError["ONLY_NUMBER_ACCEPTED"] = "Only number is accepted";
})(ApplicationError || (ApplicationError = {}));
module.exports = ApplicationError;
