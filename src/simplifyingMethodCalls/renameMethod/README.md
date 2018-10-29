# Rename Method
## Motivation
Perhaps a method was poorly named from the very beginning – for example, someone created the method in a rush and did not give proper care to naming it well.

Or perhaps the method was well named at first but as its functionality grew, the method name stopped being a good descriptor.

## How to refactor
1. Create a new method with a new name. Copy the code of the old method to it. Delete all the code in the old method and, instead of it, insert a call for the new method.

2. Find all references to the old method and replace them with references to the new one.

3. Delete the old method. If the old method is part of a public interface, do not perform this step. Instead, mark the old method as deprecated.

> If you are using IDE like: idea, try `shift + F6` to rename the method.