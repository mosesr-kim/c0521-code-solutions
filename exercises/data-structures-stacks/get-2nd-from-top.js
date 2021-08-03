/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const first = stack.pop();
  if (first || first === null || first === 0) {
    if (!stack.peek()) {
      if (stack.peek() === false) {
        const peek = stack.peek();
        stack.push(first);
        return peek;
      }
      stack.push(first);
      return undefined;
    }
    const second = stack.pop();
    stack.push(second);
    stack.push(first);
    return second;
  } else {
    return first;
  }
}
