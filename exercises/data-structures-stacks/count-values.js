/* exported countValues */

function countValues(stack) {
  let count = 0;
  const array = [];
  while (stack.peek() !== undefined) {
    array.push(stack.pop());
    count++;
  }
  return count;
}
