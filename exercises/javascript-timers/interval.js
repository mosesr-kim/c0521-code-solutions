var $h1 = document.querySelector('h1');

var counter = parseInt($h1.textContent);

function countdown() {
  counter = (parseInt($h1.textContent) - 1);
  $h1.textContent = counter;
  if (counter === 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~!';
    clearInterval(countdownFrom4);
  }
}

var countdownFrom4 = setInterval(countdown, 1000);
