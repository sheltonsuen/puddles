# Separate Query from Modifier
## Motivation
If you have a query that does not change the state of your program, you can call it as many times as you like without having to worry about unintended changes in the result caused by the mere fact of you calling the method.

## How to refactor
1. Copy the origin method to a new function and remove the side effect from the new function.

2. Change all reference to the query to the new function, and remove the query from the origin method.