/* exported includes */

function includes(list, value) {
  let current = list;
  if (current.data === value) {
    return true;
  } else {
    while (current.next !== null) {
      current = current.next;
      if (current.data === value) {
        return true;
      }
    }
    return false;
  }
}
