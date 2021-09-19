const validator = require('validator')

console.log(validator.isEmail("foo@bar.com"));
console.log(validator.isEmpty(""))
console.log(validator.isAlphanumeric("sdsds"))
console.log(validator.isAlpha("a"))
console.log(validator.isLength("a",{min:1,max:2}));