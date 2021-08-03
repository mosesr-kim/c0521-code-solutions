/* exported getLength */

function getLength(list) {
  let count = 1;
  let current = list;
  while (current.next !== null) {
    count++;
    if (current.next !== null) {
      current = current.next;
    }
  }
  return count;
}
