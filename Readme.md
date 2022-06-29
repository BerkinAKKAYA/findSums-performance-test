# findSums Performance Test

Filtering the arrays in two nested loops increase the performance **up to 7 times**.<br/>
Memoization increase the performance **up to 17 times**.

## Metrics

| Expected Number | Regular Nested Loop | Optimized Nested Loop | Memoization    |
| --------------- | ------------------- | --------------------- | -------------- |
| 10              | 658ms               | 102ms (6.45x)         |  39ms (16.87x) |
| 50              | 690ms               | 401ms (1.72x)         | 158ms (4.36x)  |
| 80              | 785ms               | 730ms (1.07x)         | 287ms (2.73x)  |

> Tests ran with 5 different array sets and for 5000 iterations each.

> Array lenghts are between 100 and 200.

> Elements in the array are randomly generated between 0 and 100.

## Run

* Clone The Repository
* Run `node index.js`
* Metrics will be logged to the console

## Project

* `code-to-compare.js` contains the regular nested loop
* `my-code.js` contains the optimized nested loop
