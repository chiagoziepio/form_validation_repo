const fullName = document.querySelector(".fullname");
const email = document.querySelector(".email");
const tel = document.querySelector(".tel");
const text = document.querySelector(".formtext");
const nameError = document.querySelector(".nameError");
const emailError = document.querySelector(".emailError");
const telError = document.querySelector(".telError");
const formError = document.querySelector(".formError");
const formBtn = document.querySelector(".input-group_submitBtn");
const textError = document.querySelector(".textError");
const theForm = document.querySelector(".form_validate");

function validateFullname(){
    let forName = fullName.value.trim();
    if(forName.length == 0){
        nameError.textContent = "required"
        return false;
    }
    if(!forName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.textContent = "write fullname";
        return false;
    }
    nameError.innerHTML ='<i class="fa-solid fa-circle-check"></i>'
    return true;
}
function validateTel(){
    let forTel = tel.value.trim();
    if(forTel.length == 0){
        telError.textContent = "required";
        return false;
    }
    if(forTel.length !== 11){
        telError.textContent = "must be up to 10 digits"
        return false;
    }
}