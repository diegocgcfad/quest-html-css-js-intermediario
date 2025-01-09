const inputWrapper = document.querySelectorAll('.input-wrapper');
const fields = document.querySelectorAll('.field');
const send = document.querySelector('.send');
const form = document.querySelector('.form');

send.addEventListener('click', function() {
    fields.forEach(function(item, index){
        if(item.value == ""){
            inputWrapper[index].classList.add('error');
            item.classList.add('border-error');
        }else{
            inputWrapper[index].classList.remove('error');
            item.classList.remove('border-error');
            item.classList.add('border-ok'); 
        }
    })
});