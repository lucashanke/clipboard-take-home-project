# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

First, I extracted a function that returns the hash based on a given input since it was used in two parts of the code. Later, I moved the default return in case of no input to the beginning of the function for better readability. Then, again for better readability, I moved the if clause that returns the hashed input if no partitionKey is given. I left the most complex logic to the end: in case there's a partitionKey in the input. The candidate could be only one of two: either the partitionkey if it is a string or the stringified parititonKey otherwise. Then, we can just check if the candidate exceeds the MAX_PARTITION_KEY_LENGTH. If it does, we hash and return. Otherwise, just return.
