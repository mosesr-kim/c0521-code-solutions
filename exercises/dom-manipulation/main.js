var count = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');
$hotButton.addEventListener('click', function (event) {
  count++;
  $clickCount.textContent = 'Click: ' + count;
  if (count < 4) {
    $hotButton.className = 'hot-button cold';
  }
  if ((count < 7) && (count >= 4)) {
    $hotButton.className = 'hot-button cool';
  }
  if ((count < 10) && (count >= 7)) {
    $hotButton.className = 'hot-button tepid';
  }
  if ((count < 13) && (count >= 10)) {
    $hotButton.className = 'hot-button warm';
  }
  if ((count < 16) && (count >= 13)) {
    $hotButton.className = 'hot-button hot';
  }
  if (count > 16) {
    $hotButton.className = 'hot-button nuclear';
  }
});
