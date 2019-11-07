# Possibly a Valid Word

## Summary

Write a program that check if a string is a possible valid word or not.

Definition of valid words:

* Valid words do not contain any special characters, or numbers. However, it can contain apostrope `'`, but no more than 1.
* Valid words has to contain at least 1 character, but no word contains only consonants.
* No word longer than 1 character can contain only vowels.
* We love Northern Europe, so words can contain the letters å, ä, ö, æ, ø.
* Valid words can be a mix of upper and lower case characters

## Input

Input is a string.

## Output

Output is a boolean.

## Example

Input: `"Bömasdf"`
Output: `false`

Input: `"Foo1"`
Output: `false`

Input: `"I'll"`
Output: `true`
