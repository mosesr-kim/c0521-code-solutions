var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', clickList);
function clickList(e) {
  console.log('event.target:', e.target);
  console.log('event.target.tagName:', e.target.tagName);
  if (e.target.tagName === 'BUTTON') {
    var $taskListItem = e.target.closest('.task-list-item');
    console.log('$taskListItemClosest:', $taskListItem);
    $taskListItem.remove();
  }
}
