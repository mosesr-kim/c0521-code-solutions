/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() || stack.peek() === null) {
    const first = stack.pop();
    stack.push(value);
    stack.push(first);
  }
}
