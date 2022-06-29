// constants
const expectedNumber = 50;
const iterations = 10000;

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
	for (let i = 0; i < iterations; i++) {
		func();
	};
	return Date.now() - startTime;
};

const [a,b] = GetRandomArrays();
for (const key of Object.keys(algorithms)) {
	const time = Benchmark(() => algorithms[key](a, b, expectedNumber));
	console.log(`${key} took ${time} milliseconds`);
}