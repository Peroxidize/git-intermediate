function printHelloWorld(num) {
    for (let i = 0; i < num; i++) {
        console.log("Hellow World!");
    }

    num <= 0 ? console.log("Hello World") : "";
}

function subtract(a, b) {
    return a - b;
}

function add(a, b) {
    return a + b;
}

function squared(a) {
    return a * a;
}

function divide(a, b) {
    return b === 0 ? "Cannot divide by zero" : a / b;
}

function pow(a, b) {
    return Math.pow(a, b);
}

function multiply(a, b) {
    return a * b;
}