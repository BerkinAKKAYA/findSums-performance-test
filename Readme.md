# findSums Performance Test

Filtering the arrays in two nested loops increase the performance up to 12 times.

| Test | Regular Nested Loop | Optimized | Difference   |
| ---- | ------------------- | --------- | ------------ |
| 1    | 2154ms              | 225ms     |  ***9.57x*** |
| 2    | 2273ms              | 202ms     | ***11.25x*** |
| 3    | 2736ms              | 247ms     | ***11.07x*** |
| 4    | 2940ms              | 283ms     | ***10.38x*** |
| 5    | 2760ms              | 229ms     | ***12.05x*** |

## Run

* Clone The Repository
* Run `node index.js`
* Metrics will be logged to the console

## Project

* `code-to-compare.js` contains the regular nested loop
* `my-code.js` contains the optimized nested loop
