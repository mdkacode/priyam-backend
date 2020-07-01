// let , var const

/**
 * let -> ye kevel ek baar initialize ho sakta h
 * let -> Identifier 'admin' has already been declared ( ERROR )
 * const -> Assignment to constant variable. ( ERROR )
 * var-> ye kevel kitni bhi baar initialize ho sakta h
 */

let admin = true;
let admin = false;
console.log(admin); // false
var admin = "priyam";
console.log(admin); // priyam

const userConstant = true;
userConstant = false;
console.log(userConstant);  //  Assignment to constant variable. 