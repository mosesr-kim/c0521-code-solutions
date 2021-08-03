/* exported takeSmaller */

function takeSmaller(queue) {
  if (typeof queue.peek() !== 'undefined') {
    const first = queue.dequeue();
    if (typeof queue.peek() !== 'undefined') {
      const second = queue.dequeue();
      if (first <= second) {
        queue.enqueue(second);
        return first;
      } else {
        queue.enqueue(first);
        return second;
      }
    } else {
      return first;
    }
  }
}
