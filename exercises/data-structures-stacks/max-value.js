/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    const array = [];
    while (stack.peek() !== undefined) {
      array.push(stack.pop());
    }
    let highest = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > highest) {
        highest = array[i];
      }
    }
    return highest;
  }
}
