// optimization_check.js

const { performance } = require('perf_hooks');

if (process.argv.length !== 3) {
    console.log("Usage: node optimization_check.js <OPTIMIZED|REGEX>");
    process.exit(1);
}

const version = process.argv[2].toUpperCase();
let letterCount;

if (version === "OPTIMIZED") {
    console.log("Using optimized version of letterCount");
    letterCount = require("./letterCount_optimized.js");
} else if (version === "REGEX") {
    console.log("Using regex version of letterCount");
    letterCount = require("./letterCount_regex.js");
} else {
    console.log("You must specify OPTIMIZED or REGEX version");
    process.exit(1);
}

const startTime = performance.now();
console.log(letterCount("elephant"));
const endTime = performance.now();
console.log(`Call to letterCount() ${version} version took ${endTime - startTime} milliseconds`);
