/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const newLinkedList = new LinkedList(value);
  newLinkedList.next = list.next;
  list.next = newLinkedList;
}
