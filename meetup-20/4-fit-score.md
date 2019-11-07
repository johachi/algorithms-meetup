# Fit Score

## Summary

Calculate the fit score between a user’s shirt and a product shirt he wants to acquire, adjusted by the problem areas that the user may have.

## Input

- One (1) data structure for the reference shirt containing each measurements and their values in cm.
- One (1) data structure for the product shirt containing each measurements and their values in cm.
- One (1) data structure containing measurements and their weight in absolute values.
- One (1) list of string containing the problem areas (i.e. `chest`, `length`).

## Output

- A float representing the fit score, lower is better.

## Example

|Item|Bust|Sleeve|Height|Shoulder|Collar|Hem|Fit score|
|----|-----|------|------|--------|------|-----|---------|
|Reference shirt|53|77|69|43|36|-|0|
|Uniqlo XS|50|73|66.5|40|-|61|9.4637|
|Uniqlo S|52|74.5|68.5|41|-|63|5.1296|
|Uniqlo M|54|76|70.5|42|-|65|3.0923|
|Uniqlo L|57|77.5|72.5|43|-|68|8.2044|

## Constraints

The weights are as follow

|Measurement|Weight|
|-----------|------|
|Bust|2|
|Sleeve|1|
|Height|.5|
|Collar|.25|
|Bicep|.25|
|Hem|.25|
|Shoulder|.25|

The problem area for the user is `shoulder`.

## Tips

- Problem areas can be simplified to a double or nothing influence.
- Size information can be incomplete (i.e. the two shirts may not have the same set of measurement inputs). 