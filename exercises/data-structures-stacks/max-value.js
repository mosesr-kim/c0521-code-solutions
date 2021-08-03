/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  while (typeof stack.peek() !== 'undefined') {
    const first = stack.pop();
    max = Math.max(max, first);
  }
  return max;
}
