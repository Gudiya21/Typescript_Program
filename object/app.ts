// Default typed Object
// Update property
// Add new property

export{}

// If we want assign data type that we want to use so we can use like this

interface usersType {
    name:string,
    age:number,
    address:any
}
let users:usersType = {
    name:'peter',
    age:30,
    address:'punjab'
}
console.warn(users)

// If we want use any type of data so we can use 'any' 
// e.g

let users1:any = {
    name:'peter',
    age:30,
    address:'punjab'
}
users1.number=30
console.warn(users1)