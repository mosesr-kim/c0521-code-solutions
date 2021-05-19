var $span = document.querySelectorAll('span');
document.addEventListener('keydown', logKey);
var index = 0;
function logKey(event) {
  if ($span[index].textContent === event.key) {
    $span[index].className = 'correct';
    $span[index + 1].className = 'current';
    index++;
  } else {
    $span[index].className = 'wrong';
  }
}
