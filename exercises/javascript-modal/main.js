var $openModal = document.querySelector('.openModal');
var $modal = document.querySelector('.modalHidden');
var $noButton = document.querySelector('.noButton');
var $modalContainer = document.querySelector('.modalContainerHidden');
function open(event) {
  $modal.className = 'modalOpen';
  $modalContainer.className = 'modalContainerOpen';
}
$openModal.addEventListener('click', open);
function close(event) {
  $modal.className = 'modalHidden';
  $modalContainer.className = 'modalContainerHidden';
}
$noButton.addEventListener('click', close);
