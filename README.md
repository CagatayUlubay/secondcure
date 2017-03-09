# secondcure
Sec(ond)[C]ure Password Strength indicator

Recently I struggled to find a password strength indicator that would work in the dynamic way I prefer.
So I decided it could be funny way to improve my Javascript skills and [git gut](http://knowyourmeme.com/memes/git-gud) in terms of ECMAScript6 (ES6).

# Strength Indicator

The important fact is that the given indicator is not based on a official formula.
You never can consider a password is safe, no matter how complex it is.
There are best practices to decrease the chances a lot by increasing the complexity
and increasing the range of possible characters.

# Aviable validators

- Minimum string length
- Maximum string length
- Alphabetic (a-zA-Z)
- Numeric (0-9)
- Symbolic (!$&/()=?,.-;:_)
- AlphaNumeric (a-zA-Z0-9)
- AlphaSymbolic (a-zA-Z!$&/()=?,.-;:_)
- NumSymbolic (0-9!$&/()=?,.-;:_)
- Sequence (aaa, 999, abc, 456)
- Dictionary (RainbowTable API, List of Array, etc.) -> ToBeFurtherDiscussed!
- Uppercase
- Lowercase
- ..
- Open for ideas

# RainbowTable API

I am planing to build a small asynchronous API that will read a given RainbowTable
in any Format. XML, JSON, CSV, PlainText with seperators, etc.

This will obviously have the highest costs.

# Orthography - Grammar

Feel free to correct my English (I would appreciate if you add a small explanation for me to learn).
I want this to be a relativly easy to understand, use, and expandable library that everyone understands
and not get sick from.

# Issues

Feel free to participate at this as much as you want. I love code quality improvements, so if
you have some insider knowledge about increasing the quality/performance, without decreasing
readability and maintainability, I would appreciate to get teached in your wisdom.

# Versioning

1.2.3.4

1. General Update - This will only increase if the whole script gets a full update (if this ever happens..)
2. Major Updates - If something bigger will be implemented and/or the script is not backward compatible anymore, this will increase
3. Minor Updates - This will be the one that indicates that we improved without and you can update without fear of problems!
4. Fast Updates - Every now and then I will do some small changes.. maybe I forgot a semicolon or I wanted to add/remove a blank line.. I do not recommend updating further than to 0 (example do: 1.4.11.0, do not: 1.4.11.4)