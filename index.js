// constants
const expectedNumber = 50;
const iterations = 10000;

// import codes
const { a, b } = require("./arrays");
const CodeToCompare = require("./code-to-compare").findSums;
const MyCode = require("./my-code").findSums;

// benchmark
const Benchmark = (name, func) => {
	const startTime = Date.now();
	for (let i = 0; i < iterations; i++) {
		func();
	};
	return Date.now() - startTime;
};

for (let i = 0; i < 5; i++) {
	const regularTime = Benchmark("Function 1", () => CodeToCompare(a, b, expectedNumber));
	const optimizedTime = Benchmark("Function 2", () => MyCode(a, b, expectedNumber));
	console.log(`Regular algorithm took ${regularTime} milliseconds to run.`);
	console.log(`Optimized algorithm took ${optimizedTime} milliseconds to run.`);
	console.log(`Difference: ${(regularTime / optimizedTime).toFixed(2)}x`);
}