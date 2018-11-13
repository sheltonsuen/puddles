# Remove Setting Method
## Motivation
You want to prevent any changes to the value of a field.

## How to Refactor
1. The value of a field should be changeable only in the constructor. If the constructor does not contain a parameter for setting the value, add one.

2. Find all setter calls.

3. If a setter call is located right after a call for the constructor of the current class, move its argument to the constructor call and remove the setter.

4. Replace setter calls in the constructor with direct access to the field.

5. Delete the setter.

## Other 
Since we can not force coders not modify object in JS, you know ...