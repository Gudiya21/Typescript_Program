// namespace in TpeScript
// What is typescript
// How to use it?
// Example for namespace

// If we use class in namespace so we have to export the class

/// <reference path = "./utils.ts"/>
namespace UserUtils{
    export class Users extends Parent implements UserType{
        getName(){
            return this.name
        }
    }
}
let u1 = new UserUtils.Users();
u1.setName("Gudia")
console.warn(u1.getName())