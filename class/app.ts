// Create a object for class
// Make property
// Make function
// Define data type of function and property
// Define data type to params


class App{
    name:string;
    constructor(name:string){
        this.name=name
    }
    getName(){
        return this.name
    }
}
let New = new App("Jyoti");
console.warn(New.getName())
