/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (typeof stack.peek() !== 'undefined') {
    const first = stack.pop();
    if (typeof stack.peek() !== 'undefined') {
      const second = stack.pop();
      stack.push(second);
      stack.push(first);
      return second;
    } else {
      stack.push(first);
      return undefined;
    }
  }
}
