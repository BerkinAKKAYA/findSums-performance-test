// constants
const expectedNumber = 50;
const iterations = 10000;

// import codes
const { a, b } = require("./arrays");
const algorithms = require("./algorithms").algorithms;

// test
const testA = [1,2,3,6,1,4,3,2,6,2,3,6,1,3,9,6,5,3,2,1];
const testB = [3,1,5,5,6,5,3,7,8,5,4,2,3,6,7,5,3,2,5,4];
const correctResult = algorithms.regularNestedLoop(testA, testB, 6);
for (const key of Object.keys(algorithms)) {
	const result = algorithms[key](testA, testB, 6);
	const isCorrect = JSON.stringify(result) === JSON.stringify(correctResult);

	if (!isCorrect) {
		console.log("Test Fails");
	}
}

// benchmark
const Benchmark = func => {
	const startTime = Date.now();
	for (let i = 0; i < iterations; i++) {
		func();
	};
	return Date.now() - startTime;
};

for (const key of Object.keys(algorithms)) {
	const time = Benchmark(() => algorithms[key](a, b, expectedNumber));
	console.log(`${key} took ${time} milliseconds`);
}