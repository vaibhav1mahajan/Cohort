"use strict";
// const x : number = 5;
// console.log(x);
class Employee {
    constructor(a, b) {
        this.name = a;
        this.age = b;
    }
    greet(phrase) {
        console.log(phrase + this.name);
    }
}
