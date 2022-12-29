export{}

// Why use Interface?
// How to use Interface
// Interface example with object

// If you want to use function in object so using interface we can use
// In interface we can define the data types first which we wants take value as their types 

interface usersType{
    name:string,
    age:number
    getName:()=>string
}
// Like this
let user:usersType = {
    name:'gudia',
    age: 19,
    getName:function()
    {
        return this.name
    }
   
}

console.warn(user.getName())