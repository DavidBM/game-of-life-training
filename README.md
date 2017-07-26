# game-of-life-training

## What is the approach?

- Space is a sequence of cells. 
- Cells are indexed by hash. 
- Every hash represents a position. 
- The class that handles the neightbours logic and other is the position class.
- With position, knowing other positions is easier because you can have the hash of the position.

## Thigs that are missing or that should be fixed

- Main iterate method
- The only non-inmutable class is the Space. Anyway, afther an iteration it should return a new space. But for now that method in not implemented.
- Check where a hash and a position user is used. Provably that can be improved and we can get rid of the `.getHash()` calls
