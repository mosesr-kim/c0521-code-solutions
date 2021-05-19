var $form = document.forms[0];
$form.addEventListener('submit', submitForm);
function submitForm(event) {
  event.preventDefault();
  var newObject = {};
  newObject.name = $form.elements.name.value;
  newObject.email = $form.elements.email.value;
  newObject.message = $form.elements.message.value;
  console.log(newObject);
}
