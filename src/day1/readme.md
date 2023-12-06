### Day 1


Interesting enough to make me mad tbh

Part 1 was overall easy approaching the solution with a 2 pointer algorithm, processing line per line, splitting it onto chars, and 
keeping track from the very beggining to find the very first number. Same for the right digit, check the line but from the very end,
and diminish that second pointer until it reaches the first one (this one is increasing at the same time, so you have i++ and j--).

Edge cases were noticeable enough, giving a proper solution.


Part 2 is on the works, but is currently giving me some trouble. Found out about burntsushi dev, and his rust aho-corasick algorithm which might seem like a 
proper solution *(but prolly overkill?). Might be worth implementing my own version in typescript and pushing it?. 