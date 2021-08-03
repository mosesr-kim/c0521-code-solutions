/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (typeof queue.peek() !== 'undefined') {
    for (let i = 0; i <= index; i++) {
      const value = queue.dequeue();
      if (i !== index) {
        queue.enqueue(value);
      } else {
        return value;
      }
    }
  }
}
