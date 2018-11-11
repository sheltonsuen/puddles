# Replace Expection with Test
# Motivation
Exceptions should be used to handle irregular behavior related to an unexpected error. They should not serve as a replacement for testing. 

# How to refactor
1. Create a conditional for an edge case and move it before the try/catch block.

3. Move code from the catch section inside this conditional.

4. In the catch section, place the code for throwing a usual unnamed exception and run all the tests.

5. If no exceptions were thrown during the tests, get rid of the try/catch operator.