# Parameterize Method
## Motivation
If you have similar methods, you probably have duplicate code, with all the consequences that this entails.

What's more, if you need to add yet another version of this functionality, you will have to create yet another method. Instead, you could simply run the existing method with a different parameter.

## How to do that 
1. Create a new method with a parameter and move it to the code that is the same for all classes, by applying Extract Method. Note that sometimes only a certain part of methods is actually the same. In this case, refactoring consists of extracting only the same part to a new method.

2. In the code of the new method, replace the special/differing value with a parameter.

3. For each old method, find the places where it is called, replacing these calls with calls to the new method that include a parameter. Then delete the old method.