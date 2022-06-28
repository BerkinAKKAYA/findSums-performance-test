function findSums(array1, array2, expectedNumber) {
	let result = [];
	const filteredArray1 = array1.filter(x => x <= expectedNumber);

	for (const val1 of filteredArray1) {
		const filteredArray2 = array2.filter(x => (x === expectedNumber - val1));

		for (const val2 of filteredArray2) {
			result.push([val1, val2])
		}
	}

	return result;
}

module.exports = { findSums }