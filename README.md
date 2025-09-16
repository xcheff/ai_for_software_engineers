# Practical AI for Software Engineers - Resources Repository

## 1. Project Overview

This repository provides practical examples and prompt templates for software engineers interested in AI, algorithmic performance, and software architecture. It includes JavaScript implementations of classic algorithms (such as Fibonacci), benchmarking scripts, utility functions, and a collection of technical prompts for architectural and engineering discussions. The project is inspired by the Medium article ["Practical AI for Software Engineers" by Edison Rodas](https://medium.com/@erodasd).

**Main technologies used:**  
- Node.js (JavaScript)
- Bash (for utility scripts)
- Jest (for testing)
- Benchmark.js (for performance benchmarking)

---

## 2. Project Structure

<pre>
.
├── benchmark_fibonnaci.js         # Benchmarks optimized vs. recursive Fibonacci implementations
├── count_js_lines.sh              # Bash script to count lines in all JavaScript files
├── fibonnaci_generator.js         # Optimized Fibonacci implementation using a generator
├── fibonnaci_generator.test.js    # Jest tests for the generator-based Fibonacci
├── fibonnaci_recursive.js         # Classic recursive Fibonacci implementation
├── fibonnaci_recursive.test.js    # Jest tests for the recursive Fibonacci
├── index.js                       # Prints project overview and reference info
├── multiply.js                    # Utility: multiplies integer arguments with validation
├── multiply.test.js               # Jest tests for multiply.js
├── package.json                   # Project metadata, dependencies, and scripts
├── prompts/                       # Technical prompt templates for software engineering scenarios
│   ├── adr_dialog_state.md
│   ├── bash_script.md
│   ├── generate_archutecture_diagram.md
│   ├── make_readme.md
│   ├── refactoring.md
│   └── test_generation.md
└── .gitignore                     # Git ignore rules
</pre>

---

## 3. Script Usage

### JavaScript Scripts

- **index.js**  
  Prints a welcome message and project overview.  
  _Run:_  
  ```bash
  node index.js
  ```

- **benchmark_fibonnaci.js**  
  Benchmarks the performance of the optimized (generator) vs. original (recursive) Fibonacci implementations using Benchmark.js.  
  _Run:_  
  ```bash
  node benchmark_fibonnaci.js
  ```

### Shell Scripts

- **count_js_lines.sh**  
  Lists all JavaScript files (excluding node_modules) and prints the total number of lines.  
  _Run:_  
  ```bash
  bash count_js_lines.sh
  ```

---

## 4. Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- Bash shell (for running `.sh` scripts, available on macOS/Linux)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:xcheff/ai_for_software_engineers.git
   cd ai_for_software_engineers
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

- To print the project overview:
  ```bash
  node index.js
  ```

- To benchmark Fibonacci implementations:
  ```bash
  node benchmark_fibonnaci.js
  ```

- To count JavaScript lines:
  ```bash
  bash count_js_lines.sh
  ```

---

## 5. Development & Testing

- **Development:**  
  Edit or add JavaScript files as needed. Utility and algorithm scripts are modular and can be extended.

- **Testing:**  
  This project uses [Jest](https://jestjs.io/) for unit testing.  
  To run all tests with coverage:
  ```bash
  npm test
  ```
  Test files are named with the `.test.js` suffix and cover all major modules.

---

## 6. License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
