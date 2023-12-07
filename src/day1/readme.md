### Day 1


Interesting enough to make me mad tbh

*Part 1* was overall easy approaching the solution with a 2 pointer algorithm, processing line per line, splitting it onto chars, and 
keeping track from the very beggining to find the very first number. Same for the right digit, check the line but from the very end,
and diminish that second pointer until it reaches the first one (this one is increasing at the same time, so you have i++ and j--).

Edge cases were noticeable enough, giving a proper solution.


*Part 2* is on the works, but is currently giving me some trouble.

_couple hours after;_
solved part 2, I spent lots of time reading about aho-corasick and decided it was better to bruteforce. My approach was refactoring the two pointer thing, but adding a small tweak. 
Since now we've got two possibilities, either A: its a digit, or B: its a number word (can't come up with a better name I'm so sorry). 

- "9sixsevenz3" => 93
- "sixsevenz3" => 63
- "9sixsevenzz" => 97

My biggest pain was spending too much time thinking about something better than the current solution I've came with, which is the one I've ended up implemented. 

Since we've got two pointers, one goes forward, and the other backwards, logic applies the same to both. 

Increment (or decrement) the pointer, and check if current char, its either 

A) a digit (and end the loop), or 

B) grab the index and the start/end, and throw that word onto a helper function. this function basically checks if any numberword value ("one", "two", etc) is substring of the current "string". 
ie: going forward, `"sixsevenz3"`, whenever `index = 2` the string to check is going to has value `six`, and, leveraging the function `indexOf` and some index manipulation, we can retrieve what number word did it match to. 

time complexity ? guess its `O(n)`` being n the amount of lines loaded from the file, mostly because the _biggest_ thing looping through are the lines from the txt. The other inner loops are just static around a fixed array. so I guess that is constant so it doesn't end up to the final amount. 