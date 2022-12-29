// enum in typescript
// What is enum
// Make a progrm with enum
// use enum with variables
// use enum with function
//  If when we are using enum with variable or function then  the value of the variable should be belog to enum
// We used enum with variable
var Days;
(function (Days) {
    // We can start indexing with any number e.g sun=10
    Days["sun"] = "sunday";
    Days["mon"] = "monday";
    Days["tue"] = "tuesday";
    Days["wed"] = "wednesday";
    Days["thu"] = "thursday";
    Days["fri"] = "friday";
    Days["sat"] = "saturday";
})(Days || (Days = {}));
var getdays;
getdays = Days.mon;
console.warn(getdays);

// We used enum with function
function whichday(day) {
    return "Today is " + day;
}
console.warn(whichday(Days.mon));
