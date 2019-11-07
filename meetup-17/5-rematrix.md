# (Re)matrix

## Summary

Given a two dimensional binary matrix, return a valid path from the top left to the bottom right corner.

Rules:

* You can  traveling only on 1's
* You can only move to the right or down, not across
* The matrix has only 0's and 1's

## Input

An array of arrays of 0's and 1's representing a two dimensional matrix.

## Output

An array of tuples containing the row-column of each move.

## Example

Input:

```js
[
 [1, 0, 0],
 [1, 1, 0],
 [0, 1 ,1]
]
```

Output: `[[0, 0], [1, 0], [1, 1], [2, 1], [2, 2]]`

## Constraints

Cannot use loops. Can only use recursion.
