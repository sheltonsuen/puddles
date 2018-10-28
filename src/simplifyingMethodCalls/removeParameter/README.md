# Remove Parameter

## Motivation

Every parameter in a method call forces the programmer reading it to figure out what information is found in this parameter. And if a parameter is entirely unused in the method body, this "noggin scratching" is for naught.

And in any case, additional parameters are extra code that has to be run.

Sometimes we add parameters with an eye to the future, anticipating changes to the method for which the parameter might be needed. All the same, experience shows that it is better to add a parameter only when it is genuinely needed. After all, anticipated changes often remain just that – anticipated.

## How to refactor

1. See if there has side effect if we remove the paramerter of the function.
