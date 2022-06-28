function findSums(array1, array2, expectedNumber) {
	let result = [];
	for (let i = 0; i < array1.length; i++) {
		for (let j = 0; j < array2.length; j++) {
			if (array1[i] + array2[j] === expectedNumber) {
				result.push([array1[i], array2[j]]);
			}
		}
	}
	return result;
}

module.exports = { findSums }