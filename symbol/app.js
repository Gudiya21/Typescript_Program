// What is symbol
// Make a program with symbol
// Use symbol as key of object
// Use symbol as function of class
var _a;
// If you are using symbol so we can't use new keyword among symbol
// Symbol produce unique id
// Example
var s1 = Symbol();
var s2 = Symbol();
console.warn(s1 === s2); //It will give error because symbol prduce unique id 
// we can also pass value
var s3 = Symbol("data");
var s4 = Symbol();
console.warn(s1.toString());
var s5 = Symbol("data");
var s6 = Symbol("data1");
var data = (_a = {},
    _a[s5] = "Somedata",
    _a);
console.warn(data[s5]);
