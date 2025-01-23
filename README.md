# JavaScript Stack Overflow Bug

This repository demonstrates a common JavaScript error: a stack overflow caused by uncontrolled recursion.  The `foo()` function recursively calls itself, but lacks a proper termination condition when the input values differ significantly.  This leads to excessive function calls that exceed the call stack limit, resulting in a runtime error.

The solution introduces a check to prevent excessive recursion and handles the edge case gracefully.