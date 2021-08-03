/* exported swapFront */

function swapFront(list) {
  if (list.next !== null) {
    const first = list;
    const second = list.next;
    const third = list.next.next;
    second.next = first;
    first.next = third;
    return second;
  } else {
    return list;
  }
}
