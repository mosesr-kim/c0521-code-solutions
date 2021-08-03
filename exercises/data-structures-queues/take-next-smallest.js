/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (typeof queue.peek() !== 'undefined') {
    let first = queue.dequeue();
    if (typeof queue.peek() !== 'undefined') {
      while (typeof queue.peek() !== 'undefined') {
        const second = queue.peek();
        if (first <= second) {
          return first;
        } else {
          const second = queue.dequeue();
          queue.enqueue(first);
          first = second;
        }
      }
    } else {
      return first;
    }
  }
}
