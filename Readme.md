# findSums Performance Test

Filtering the arrays in two nested loops increase the performance up to 7 times.

## Metrics

| Expected Number | Regular Nested Loop | Optimized | Difference   |
| --------------- | ------------------- | --------- | ------------ |
| 10              | 1395ms              | 264ms     |  ***5.28x*** |
| 10              | 1126ms              | 200ms     |  ***5.63x*** |
| 10              | 1930ms              | 325ms     |  ***5.94x*** |
| 10              | 2062ms              | 206ms     |  ***6.74x*** |
| 10              | 1340ms              | 217ms     |  ***6.18x*** |

> If expected number is 10, average difference is ***5.95x***

| Expected Number | Regular Nested Loop | Optimized | Difference   |
| --------------- | ------------------- | --------- | ------------ |
| 50              | 1073ms              | 714ms     |  ***1.50x*** |
| 50              | 1176ms              | 732ms     |  ***1.61x*** |
| 50              | 1243ms              | 741ms     |  ***1.68x*** |
| 50              | 1242ms              | 741ms     |  ***1.68x*** |
| 50              | 1242ms              | 735ms     |  ***1.69x*** |

> If expected number is 50, average difference is ***1.63x***

| Expected Number | Regular Nested Loop | Optimized | Difference   |
| --------------- | ------------------- | --------- | ------------ |
| 80              | 1436ms              | 1315ms    |  ***1.09x*** |
| 80              | 1574ms              | 1366ms    |  ***1.15x*** |
| 80              | 1667ms              | 1409ms    |  ***1.18x*** |
| 80              | 1671ms              | 1404ms    |  ***1.19x*** |
| 80              | 1667ms              | 1404ms    |  ***1.19x*** |

> If expected number is 80, average difference is ***1.16x***

## Run

* Clone The Repository
* Run `node index.js`
* Metrics will be logged to the console

## Project

* `code-to-compare.js` contains the regular nested loop
* `my-code.js` contains the optimized nested loop
