const textInputs = document.querySelectorAll('.info__text-input');

function labelActive(labelElement) {
  labelElement.classList.add('info__label_type_active');
}

function labelNotActive(labelElement) {
  labelElement.classList.remove('info__label_type_active');
}

textInputs.forEach(textInput => {
  textInput.addEventListener('input', e => {
    if (textInput.value === '') {
      console.log('строчка пуста');
      let label = document.querySelector(`[for="${e.target.id}"]`);
      labelNotActive(label);
    }
    else {
      console.log('строчка НЕ пуста');
      let label = document.querySelector(`[for="${e.target.id}"]`);
      labelActive(label);
    }
  }) 
})

textInputs.forEach(textInput => {
  textInput.addEventListener('click', e => {
    if (textInput.value === '') {
      console.log('строчка пуста');
      let label = document.querySelector(`[for="${e.target.id}"]`);
      labelActive(label);
    }
    else {
      console.log('строчка НЕ пуста');
      let label = document.querySelector(`[for="${e.target.id}"]`);
      labelActive(label);
    }
  }) 
})


