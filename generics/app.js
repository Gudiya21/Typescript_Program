// What is genrics in typescript
// Why we need it
// Make a program with generics
// Make a program without generics
// Check Difference
function user(data) {
    return data;
}
console.warn(user("Gudia"));
console.warn(user({ name: "gudia", age: 30 }));
console.warn(user({ name: "gudia", age: 30 }).name);
