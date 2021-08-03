/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const newList = new LinkedList(value);
  let tail = list;
  while (tail.next !== null) {
    tail = tail.next;
  }
  tail.next = newList;
}
