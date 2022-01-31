const label = document.querySelector ('.info__label');
const textInputs = document.querySelectorAll('.info__text-input');

/* textInputs.forEach(function(input) {
  if (input.value === '') {
    label.classList.remove('info__label_type_active');
    console.log('инпут пустой');
    return false;
  } else {
    label.classList.add('info__label_type_active');
    console.log('инпут НЕ пустой');
    labelActive();
  }
  return false;
}) */

function labelActive(labelElement) {
  labelElement.classList.add('info__label_type_active');
  checkingStringEmpty();
}

textInputs.forEach(textInput => {
  textInput.addEventListener('click', e => {
    let label = document.querySelector(`[for="${e.target.id}"]`);
    labelActive(label);
}) 
})
/*


function labelNotActive(labelElement) {
  labelElement.classList.closest('info__label_type_active');
}

function checkingStringEmpty() {
  textInputs.forEach(textInput => {
    
      if (textInput.value === '') {
        console.log('строчка пуста');
        /* let label = document.querySelector(`[for="${e.target.id}"]`);  
        labelNotActive();
      }
      else {
        console.log('строчка не пуста');
        return;
      }
  })
}

textInputs.forEach(textInput => {
  textInput.addEventListener('click', e => {
    let label = document.querySelector(`[for="${e.target.id}"]`);
    labelActive(label);
}) 
})
*/
