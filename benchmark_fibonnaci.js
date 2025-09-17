// benchmark_fibonnaci.js
const Benchmark = require("benchmark");

let optimized, unoptimized;

try {
  optimized = require("./fibonnaci_optimized.js");
  unoptimized = require("./fibonnaci_recursive.js");
} catch (err) {
  console.error("Error loading modules:", err.message);
  process.exit(1);
}

console.log("\nRunning benchmark for OPTIMIZED vs ORIGINAL...\n");

const suite = new Benchmark.Suite();

suite
  .add("OPTIMIZED Fibonnaci f(35) - optimized version", function () {
    optimized(35);
  })
  .add("ORIGINAL Fibonacci f(35) - recursive version", function () {
    unoptimized(35);
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("\nFastest is: " + this.filter("fastest").map("name"));

    this.forEach((bench) => {
      console.log(`\nStats for ${bench.name}:`);
      console.log("Ops/sec:", bench.hz.toFixed(2));
      console.log("Mean:", (bench.stats.mean * 1000).toFixed(6), "ms");
      console.log("Std dev:", (bench.stats.deviation * 1000).toFixed(6), "ms");
      console.log("Margin of error:", (bench.stats.moe * 1000).toFixed(6), "ms");
    });
  })
  .run({ async: true });
