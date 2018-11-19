# Replace Parameter with Explicit Methods
## Motivation
A method containing parameter-dependent variants has grown massive. Non-trivial code is run in each branch and new variants are added very rarely.

## How to do that 
* For each variant of the method, create a separate method. Run these methods based on the value of a parameter in the main method.

* Find all places where the original method is called. In these places, place a call for one of the new parameter-dependent variants.

* When no calls to the original method remain, delete it.