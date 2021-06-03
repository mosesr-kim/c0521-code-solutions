var $left = document.querySelector('#left');
var $right = document.querySelector('#right');
var $images = document.querySelectorAll('.carouselImg');
var $circleButtons = document.querySelector('.circle');
var $circles = document.querySelectorAll('.fa-circle');

var counter = 1;

$right.addEventListener('click', moveCarouselRight);
$left.addEventListener('click', moveCarouselLeft);
$circleButtons.addEventListener('click', circleClicked);

function viewSwap() {
  stopCarousel();
  carouselID = setInterval(moveCarouselRight, 3000);
  for (var i = 0; i < 5; i++) {
    if (counter === parseInt($images[i].getAttribute('data-view'))) {
      $images[i].className = 'carouselImg';
      $circles[i].className = 'fas fa-circle';
    } else {
      $images[i].className = 'hidden';
      $circles[i].className = 'far fa-circle';
    }
  }
}

function circleClicked(event) {
  if (event.target.className.includes('far')) {
    counter = (parseInt(event.target.getAttribute('data-view')));
    viewSwap();
  }
}

function moveCarouselLeft(event) {
  if (counter === 1) {
    counter = 5;
    viewSwap();
    return;
  }
  counter -= 1;
  viewSwap();
}

function moveCarouselRight() {
  if (counter === 5) {
    counter = 1;
    viewSwap();
    return;
  }
  counter += 1;
  viewSwap();
}

function stopCarousel() {
  clearInterval(carouselID);
}

var carouselID = setInterval(moveCarouselRight, 3000);
