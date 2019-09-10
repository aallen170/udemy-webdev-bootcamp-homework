class whatever {
    constructor(anything) {
        anything: null;
        something: null;
    }
}

let object = new whatever;

object.anything = 3;

console.log("1st: " + object.anything);

let object2 = new whatever;

object2.anything = 5;

console.log("2nd: " + object.anything);
console.log("3rd: " + object2.anything);

console.log("4th: " + object);