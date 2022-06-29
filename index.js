// constants
const expectedNumbersToTest = [10, 50, 90];
const benchmarkCount = 5;
const iterationsInOneBenchmark = 5000;

// import codes
const { GetRandomArrays } = require("./arrays");
const { algorithms } = require("./algorithms");

// test
const testA = [1,2,3,6,1];
const testB = [3,1,5,5,6];
const correctResult = algorithms.regularNestedLoop(testA, testB, 6);
for (const key of Object.keys(algorithms)) {
	const result = algorithms[key](testA, testB, 6);
	const isCorrect = JSON.stringify(result) === JSON.stringify(correctResult);

	if (!isCorrect) {
		console.log(`Test Fails For ${key}`);
		console.log(result);
		console.log(correctResult);
	}
}

// benchmark
const Benchmark = func => {
	const startTime = Date.now();
	for (let i = 0; i < iterationsInOneBenchmark; i++) {
		func();
	};
	return Date.now() - startTime;
};

// find performances (time took to run)
const performances = {};
for (let i=0; i<benchmarkCount; i++) {
	const [a,b] = GetRandomArrays();

	// fill performances object
	// structure: { algorithm: { expectedNumber1: [...time], expectedNumber2: [...] }}
	// example:   { nestedLoop: { 10: [100, 200], 50: [...], 90: [...] } }
	for (const key of Object.keys(algorithms)) {
		for (const expectedNumber of expectedNumbersToTest) {
			const time = Benchmark(() => algorithms[key](a, b, expectedNumber));
			performances[key] = performances[key] || {};
			performances[key][expectedNumber] = performances[key][expectedNumber] || [];
			performances[key][expectedNumber].push(time);
		}
	}
}

// find average times
for (const key of Object.keys(algorithms)) {
	for (const expectedNumber of expectedNumbersToTest) {
		const arr = performances[key][expectedNumber];
		performances[key][expectedNumber] = parseInt(arr.reduce((a, b) => a+b, 0) / arr.length);
	}
}

// print report
for (const expectedNumber of expectedNumbersToTest) {
	console.log("If the expected number is", expectedNumber);
	for (const key of Object.keys(algorithms)) {
		console.log(`${key} takes ${performances[key][expectedNumber]}ms to run`);
	}
}