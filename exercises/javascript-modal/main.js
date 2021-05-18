var $openModal = document.querySelector('.openModal');
var $modal = document.querySelector('.modalHidden');
var $noButton = document.querySelector('.noButton');
var $modalContainer = document.querySelector('.modalContainerHidden');
var isOpen = false;
function open(event) {
  if (isOpen === false) {
    $modal.className = 'modalOpen';
    $modalContainer.className = 'modalContainerOpen';
    isOpen = true;
  }
}
$openModal.addEventListener('click', open);
function close(event) {
  if (isOpen === true) {
    $modal.className = 'modalHidden';
    $modalContainer.className = 'modalContainerHidden';
    isOpen = false;
  }
}
$noButton.addEventListener('click', close);
