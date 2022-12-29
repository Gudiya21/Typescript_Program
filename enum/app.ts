// enum in typescript
// What is enum
// Make a progrm with enum
// use enum with variables
// use enum with function

//  If when we are using enum with variable or function then  the value of the variable should be belog to enum


// We used enum with variable
enum Days{
    // We can start indexing with any number e.g sun=10
    sun = "sunday",mon = 'monday',tue = 'tuesday',wed = 'wednesday',thu = 'thursday',fri = 'friday',sat = 'saturday'
}
let getdays:Days
getdays=Days.mon
console.warn(getdays)


// We used enum with function

function whichday(day:Days){
    return "Today is " + day
}
console.warn(whichday(Days.mon))