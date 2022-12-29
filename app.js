"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.warn("Test function working 'Yes',");
    };
    return App;
}());
var a = new App();
a.test();
