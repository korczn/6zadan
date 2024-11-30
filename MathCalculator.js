class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}

const calculator = new Calculator();

const numbers = { a: 9, b: 2 };
const { a, b } = numbers;

console.log(`${a} + ${b} = ${calculator.add(a, b)}`);

console.log(`${b} - ${a} = ${calculator.subtract(a, b)}`);

console.log(`${a} * ${b} = ${calculator.multiply(a, b)}`);
    
console.log(`${a} / ${b} = ${calculator.divide(a, b)}`);