"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = {
    name: 'peter',
    age: 30,
    address: 'punjab'
};
console.warn(users);
// If we want use any type of data so we can use 'any' 
// e.g
var users1 = {
    name: 'peter',
    age: 30,
    address: 'punjab'
};
users1.number = 30;
console.warn(users1);
