export{}
// for use one data type only

let user:string[] = ["Gudia", "Subhadra","Muskan"]
user.push("Trupti")
console.warn(user)

// For use any data type we can use any

let user2:any[] = ["Gudia", "Subhadra","Muskan"]
user2.push(100)
console.warn(user2)

// If we want use two data types

let user3:[string,number]=['gudia',10]
user3.push(100)
console.warn(user3)