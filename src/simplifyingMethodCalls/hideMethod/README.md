# Hide Method
## Motivation
* Hiding methods makes it easier for your code to evolve.

* By making methods private, you underscore the importance of the public interface.

## how to refactor
* don't export the private method

* add a flag like `_privateMethod` to the private of a class.