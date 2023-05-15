"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = exports.introduce = exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a + b;
}
exports.default = addNumbers;
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ''; }
    return "".concat(str1, " ").concat(str2);
};
exports.addStrings = addStrings;
//union types
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
// function that doesn't return anything (void)
var printFormat = function (title, param) {
    return console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
// function that returns a promise
var fetchData = function (url) {
    return Promise.resolve("Data from ".concat(url));
};
exports.fetchData = fetchData;
// rest parameters
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(' '));
}
exports.introduce = introduce;
//typescript just enforces type safety at compile time, not at runtime
//* use of optional chaining ?.
function getName(user) {
    var _a, _b;
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : 'first', " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : 'last');
}
exports.getName = getName;
