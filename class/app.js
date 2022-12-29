// Create a object for class
// Make property
// Make function
// Define data type of function and property
// Define data type to params
var App = /** @class */ (function () {
    function App(name) {
        this.name = name;
    }
    App.prototype.getName = function () {
        return this.name;
    };
    return App;
}());
var New = new App("Jyoti");
console.warn(New.getName());
