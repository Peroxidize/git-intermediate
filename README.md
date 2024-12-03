# JavaScript Utility Functions

This repository contains a collection of utility functions written in JavaScript. These functions include basic arithmetic operations and a function to print "Hello World!" a specified number of times.

## Functions Included

1. **`printHelloWorld(num)`**: Prints "Hello World!" to the console `num` times.
2. **`subtract(a, b)`**: Returns the result of subtracting `b` from `a`.
3. **`add(a, b)`**: Returns the sum of `a` and `b`.
4. **`squared(a)`**: Returns the square of `a`.
5. **`divide(a, b)`**: Returns the result of dividing `a` by `b`. If `b` is zero, it returns an error message.

## Installation

To use these functions, you need to have Node.js installed on your machine. If you haven't installed Node.js yet, you can download it from [nodejs.org](https://nodejs.org/).

### Steps to Install

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Peroxidize/git-foundational.git
    ```
2. **Navigate to the project directory:**
   ```bash
   cd git-foundational
   ```
3. **Install dependencies (if any):**
    ```bash
    npm install
    ```

### Usage

You can use these functions in your JavaScript code as follows:

1. **Import the functions (if using modules):**
    ```js
    const { printHelloWorld, subtract, add, squared, divide } = require('./path/to/your/file');
    ```

2. **Call the functions:**
    ```js
    printHelloWorld(3); // Prints "Hello World!" 3 times
    console.log(subtract(10, 5)); // Outputs: 5
    console.log(add(10, 5)); // Outputs: 15
    console.log(squared(4)); // Outputs: 16
    console.log(divide(10, 2)); // Outputs: 5
    console.log(divide(10, 0)); // Outputs: "Cannot divide by zero"
    ```

### Contributing

Contributions are welcome! If you have suggestions for improvements or additional functions, feel free to open an issue or submit a pull request.