// What is inheritance
// Make a parent class
// Make a child class
// Inherit a class

export{}
class Parent{
    name:string="";
    setName(name):void{
        return this.name = name
    }
}
class Child extends Parent{
    getName():string{
        return this.name
    }
}
let New = new Child()
New.setName("Sukanya")
console.warn(New.getName())