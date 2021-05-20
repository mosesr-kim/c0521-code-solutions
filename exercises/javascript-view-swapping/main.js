var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');
$tabContainer.addEventListener('click', matches);
function matches(e) {
  if (e.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] !== e.target) {
        $tab[i].className = 'tab';
      } else {
        $tab[i].className = 'tab active';
      }
    }
  }
  if (e.target.matches('.tab')) {
    var $dataView = e.target.getAttribute('data-view');
    for (i = 0; i < $view.length; i++) {
      if ($view[i].getAttribute('data-view') !== $dataView) {
        $view[i].setAttribute('class', 'hidden');
      } else {
        $view[i].setAttribute('class', 'view');
      }
    }
  }
}
