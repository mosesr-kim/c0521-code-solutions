var $lightBulb = document.querySelector('.light-bulb-on');
var $row = document.querySelector('.row-on');
var isOn = true;
function turnOnOff(event) {
  if (isOn === true) {
    $lightBulb.className = 'light-bulb-off';
    $row.className = 'row-off';
    isOn = false;
  } else {
    $lightBulb.className = 'light-bulb-on';
    $row.className = 'row-on';
    isOn = true;
  }
}
$lightBulb.addEventListener('click', turnOnOff);
