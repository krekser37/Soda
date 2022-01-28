const label = document.querySelectorAll('.info__container_is_label')
const text = document.querySelectorAll('.info__container_is_text-input')


text.addEventListener('click', function() {
    label.classList.add('.info__container_is_label_active');
 
})