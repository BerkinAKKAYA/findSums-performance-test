const expectedNumber = 99;

// import codes
const { a, b } = require("./arrays");
const CodeToCompare = require("./code-to-compare").findSums;
const MyCode = require("./my-code").findSums;

// test
const f1Result = CodeToCompare(a, b, expectedNumber);
const f2Result = MyCode(a, b, expectedNumber);

if (JSON.stringify(f1Result) === JSON.stringify(f2Result)) {
	console.log("Test Passes");
} else {
	console.log("Test Fails");
}

// benchmark
const iterations = 10000;

const Benchmark = (name, func) => {
	const startTime = Date.now();
	for (let i = 0; i < iterations; i++) {
		func();
	};
	console.log(`${name} took ${Date.now() - startTime} milliseconds`);
};

Benchmark("Function 1", () => CodeToCompare(a, b, 9));
Benchmark("Function 2", () => MyCode(a, b, 9));