"use strict";
// What is module
// Make 2 file and make module
// Use them in single file
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("./student");
var teacher_1 = require("./teacher");
console.warn((0, student_1.default)());
console.warn((0, teacher_1.default)());
 