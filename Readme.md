# findSums Performance Test

Filtering the arrays in two nested loops increase the performance up to 7 times.

## Metrics

| Expected Number | Regular Nested Loop | Optimized Nested Loop | Memoization    |
| --------------- | ------------------- | --------------------- | -------------- |
| 10              | 658ms               | 102ms (6.45x)         |  39ms (16.87x) |
| 50              | 690ms               | 401ms (1.72x)         | 158ms (4.36x)  |
| 80              | 785ms               | 730ms (1.07x)         | 287ms (2.73x)  |

> Tests ran with 5 different arrays and for 5000 iterations.

## Run

* Clone The Repository
* Run `node index.js`
* Metrics will be logged to the console

## Project

* `code-to-compare.js` contains the regular nested loop
* `my-code.js` contains the optimized nested loop
