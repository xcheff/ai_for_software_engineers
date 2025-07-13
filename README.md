# Practical AI for Software Engineers

## 1. Project Overview

This repository provides example scripts and prompt templates for software engineers interested in practical applications of AI and automation. The project includes JavaScript utilities for string analysis, arithmetic operations, benchmarking, and shell scripting, as well as prompt templates for various software engineering tasks. The code and prompts are referenced in the Medium article ["Practical AI for Software Engineers" by Edison Rodas](https://medium.com/@erodasd).

**Main technologies:**  
- Node.js (JavaScript)
- Bash

---

## 2. Project Structure

```
.
├── count_js_lines.sh              # Bash script to list JS files and count total lines
├── index.js                       # Prints repository overview and welcome messages
├── letterCount_optimized.js       # Counts vowels/consonants in a string (optimized)
├── letterCount_regex.js           # Counts vowels/consonants in a string (regex)
├── LICENSE                        # MIT License
├── multiply.js                    # Multiplies integer arguments with validation
├── multiply.test.js               # Jest-style tests for multiply.js
├── optimization_check.js          # Benchmarks letterCount implementations
├── package.json                   # Node.js project metadata
├── README.md                      # Project documentation
└── prompts/
    ├── adr_dialog_state.md        # Prompt template (ADR dialog state)
    ├── bash_script.md             # Prompt template (Bash script)
    ├── generate_archutecture_diagram.md # Prompt template (architecture diagram)
    ├── make_readme.md             # Prompt template (README generation)
    ├── refactoring.md             # Prompt template (refactoring)
    └── test_generation.md         # Prompt template (test generation)
```

---

## 3. Script Usage

### Shell Scripts

- **count_js_lines.sh**
  - **Purpose:** Lists all JavaScript files (excluding `node_modules`) and prints the total number of lines.
  - **Usage:**
    ```bash
    bash count_js_lines.sh
    ```

### Node.js Scripts

- **index.js**
  - **Purpose:** Prints repository overview and welcome messages.
  - **Usage:**
    ```bash
    node index.js
    ```

- **optimization_check.js**
  - **Purpose:** Benchmarks and compares the performance of the two `letterCount` implementations (`OPTIMIZED` or `REGEX`).
  - **Usage:**
    ```bash
    node optimization_check.js OPTIMIZED
    node optimization_check.js REGEX
    ```

- **letterCount_optimized.js**
  - **Purpose:** Exports a function to count vowels and consonants in a string using an optimized approach.
  - **Usage:** (as a module)
    ```js
    const letterCount = require('./letterCount_optimized');
    letterCount('example');
    ```

- **letterCount_regex.js**
  - **Purpose:** Exports a function to count vowels and consonants in a string using regular expressions.
  - **Usage:** (as a module)
    ```js
    const letterCount = require('./letterCount_regex');
    letterCount('example');
    ```

- **multiply.js**
  - **Purpose:** Exports `multiplyIntegers`, a function that multiplies integer arguments and throws a `TypeError` for non-integers.
  - **Usage:** (as a module)
    ```js
    const { multiplyIntegers } = require('./multiply');
    multiplyIntegers(2, 3, 4); // 24
    ```

---

## 4. Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (recommended v14 or higher)
- Bash shell (for running `.sh` scripts)

### Install

No dependencies are required. If you wish to add dependencies or use a package manager, run:

```bash
npm install
```

### Environment Setup

No environment variables or configuration files are required.

### How to Run

- Print repository overview:
  ```bash
  node index.js
  ```
- Benchmark letterCount implementations:
  ```bash
  node optimization_check.js OPTIMIZED
  node optimization_check.js REGEX
  ```
- List JavaScript files and count lines:
  ```bash
  bash count_js_lines.sh
  ```

---

## 5. Development & Testing

- **Development:**  
  Edit or add scripts in the project root or `prompts/` directory as needed.

- **Testing:**  
  The project includes Jest-style tests for `multiply.js` in `multiply.test.js`.  
  To run the tests, install Jest globally or as a dev dependency, then run:
  ```bash
  npx jest multiply.test.js
  ```
  > Note: The `npm test` script is a placeholder and does not run tests by default.

---

## 6. License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
