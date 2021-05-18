var $lightBulb = document.querySelector('.light-bulb-on');
var $row = document.querySelector('.row-on');
var count = 0;
function turnOnOff(event) {
  if (count % 2 === 0) {
    $lightBulb.className = 'light-bulb-off';
    $row.className = 'row-off';
    count++;
  } else {
    $lightBulb.className = 'light-bulb-on';
    $row.className = 'row-on';
    count++;
  }
}
$lightBulb.addEventListener('click', turnOnOff);
