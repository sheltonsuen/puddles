# Replace Temp With Query

## Motivation

The reasons for this refactoring are the same as for Split Temporary Variable, but in this case we are dealing with a parameter, not a local variable.

First, if a parameter is passed via reference, then after the parameter value is changed inside the method, this value is passed to the argument that requested calling this method. Very often, this occurs accidentally and leads to unfortunate effects. Even if parameters are usually passed by value (and not by reference) in your programming language, this coding quirk may alienate those who are unaccustomed to it.

Second, multiple assignments of different values to a single parameter make it difficult for you to know what data should be contained in the parameter at any particular point in time. The problem worsens if your parameter and its contents are documented but the actual value is capable of differing from what is expected inside the method.

## Mechanics

1. Create a local variable and assign the initial value of your parameter.

2. In all method code that follows this line, replace the parameter with your new local variable.
