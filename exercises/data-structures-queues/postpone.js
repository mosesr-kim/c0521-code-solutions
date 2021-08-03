/* exported postpone */

function postpone(queue) {
  if (typeof queue.peek() !== 'undefined') {
    const first = queue.dequeue();
    queue.enqueue(first);
  }
}
