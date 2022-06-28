const minLength = 200;
const maxLength = 400;
const maxValue = 100;

const lengthOfA = minLength + Math.random() * (maxLength - minLength);
const lengthOfB = minLength + Math.random() * (maxLength - minLength);

const a = [];
const b = [];

for (let i = 0; i < lengthOfA; i++) {
	a.push(parseInt(Math.random() * maxValue));
}

for (let i = 0; i < lengthOfB; i++) {
	b.push(parseInt(Math.random() * maxValue));
}

module.exports = { a, b };