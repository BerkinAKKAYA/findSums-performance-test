function regularNestedLoop(array1, array2, expectedNumber) {
	const result = [];
	for (let i = 0; i < array1.length; i++) {
		for (let j = 0; j < array2.length; j++) {
			if (array1[i] + array2[j] === expectedNumber) {
				result.push([array1[i], array2[j]]);
			}
		}
	}
	return result;
}

function optimizedNestedLoop(array1, array2, expectedNumber) {
	const result = [];
	const filteredArray1 = array1.filter(x => x <= expectedNumber);

	for (const val1 of filteredArray1) {
		const filteredArray2 = array2.filter(x => (x === expectedNumber - val1));

		for (const val2 of filteredArray2) {
			result.push([val1, val2])
		}
	}

	return result;
}

function memoized(array1, array2, expectedNumber) {
	const result = [];
	const memo = {}; // array2'de bir sayıdan kaç tane bulunduğunu tutar
	const filteredArray1 = array1.filter(x => x <= expectedNumber);

	for (const val1 of filteredArray1) {
		const number = expectedNumber - val1;

		if (!memo.hasOwnProperty(number)) {
			memo[number] = array2.filter(x => x === number).length;
		}

		for (let i=0; i<memo[number]; i++) {
			result.push([val1, number]);
		}
	}

	return result;
}

const algorithms = { 
	regularNestedLoop,
	optimizedNestedLoop,
	memoized
}

module.exports = { algorithms }