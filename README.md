# Practical AI for Software Engineers

## 1. Project Overview

This repository provides practical code examples, scripts, and prompt templates for software engineers interested in AI, automation, and code analysis. It includes efficient algorithm implementations (such as Fibonacci), benchmarking tools, utility scripts, and test suites. The project is inspired by the Medium article ["Practical AI for Software Engineers" by Edison Rodas](https://medium.com/@erodasd).  
**Main technologies:** Node.js (JavaScript), Bash.

## 2. Project Structure

```
.
├── benchmark_fibonnaci.js         # Benchmarks optimized vs. recursive Fibonacci implementations
├── count_js_lines.sh              # Bash script to count lines in all JS files
├── fibonnaci.js                   # Iterative, efficient Fibonacci implementation (main version)
├── fibonnaci_optimized.js         # Iterative, efficient Fibonacci implementation (for benchmarking)
├── fibonnaci_optimized.test.js    # Jest tests for optimized Fibonacci
├── fibonnaci_recursive.js         # Classic recursive Fibonacci implementation
├── fibonnaci_recursive.test.js    # Jest tests for recursive Fibonacci
├── index.js                       # Prints project info and welcome message
├── multiply.js                    # Utility: multiplies integer arguments with validation
├── multiply.test.js               # Jest tests for multiply utility
├── package.json                   # Project metadata and scripts
├── LICENSE                        # MIT License
├── prompts/                       # Prompt templates for AI/code tasks (Markdown)
│   ├── adr_dialog_state.md
│   ├── bash_script.md
│   ├── generate_archutecture_diagram.md
│   ├── make_readme.md
│   ├── refactoring.md
│   └── test_generation.md
└── README.md                      # Project documentation (this file)
```

## 3. Script Usage

- **benchmark_fibonnaci.js**  
  Benchmarks the performance of optimized vs. recursive Fibonacci implementations using the `benchmark` npm package.  
  _Example:_  
  ```bash
  node benchmark_fibonnaci.js
  ```

- **count_js_lines.sh**  
  Lists all JavaScript files (excluding node_modules) and prints the total number of lines.  
  _Example:_  
  ```bash
  bash count_js_lines.sh
  ```

## 4. Setup Instructions

- **Prerequisites:**  
  - Node.js (v14+ recommended)
  - npm

- **Install dependencies:**  
  ```bash
  npm install
  ```

- **How to run the main info script:**  
  ```bash
  node index.js
  ```

- **How to run benchmarks:**  
  ```bash
  node benchmark_fibonnaci.js
  ```

- **How to use utility scripts:**  
  - Fibonacci: Import and use from `fibonnaci.js`, `fibonnaci_optimized.js`, or `fibonnaci_recursive.js`
  - Multiply: Import `multiplyIntegers` from `multiply.js`

## 5. Development & Testing

- **Run tests (Jest):**  
  ```bash
  npm test
  ```
  This runs all test suites (for Fibonacci and multiply utilities) and reports coverage.

- **Development:**  
  - Edit or add scripts as needed.
  - Prompt templates in `prompts/` can be used for AI/code generation tasks.

## 6. License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
