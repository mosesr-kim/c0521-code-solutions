/* exported isEmpty */

function isEmpty(stack) {
  if (stack.peek() || (stack.peek() === '') || (stack.peek() === null)) {
    return false;
  } else {
    return true;
  }
}
