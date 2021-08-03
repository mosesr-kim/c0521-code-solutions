/* exported removeTail */

function removeTail(list) {
  if (list.next !== null) {
    let tail = list;
    while (tail.next.next !== null) {
      tail = tail.next;
    }
    tail.next = null;
  }
}
