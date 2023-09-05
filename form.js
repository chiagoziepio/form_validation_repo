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
    else if(!forName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.textContent = "write fullname";
        return false;
    }
    nameError.innerHTML ='<i class="fa-solid fa-circle-check"></i>'
    return true;
};
function validateTel(){
    let forTel = tel.value.trim();
    if(forTel.length == 0){
        telError.textContent = "required";
        return false;
    }
    else if(forTel.length !== 11){
        telError.textContent = "must be up to 11 digits"
        return false;
    }
    else if(!forTel.match(/^[0-9]{11}$/)){
        telError.textContent = "numbers only";
        return false;
    }
    telError.innerHTML ='<i class="fa-solid fa-circle-check"></i>'
    return true;
};

function validateMail(){
    let forEmail = email.value.trim();
    if(forEmail.length == 0){
        emailError.textContent = "required";
        return false
    }else{
        emailError.innerHTML ='<i class="fa-solid fa-circle-check"></i>'
        return true;
    }
    
};

function validateText(){
    let forText = text.value.trim();
    let limit = 30;
    let remaining =limit - forText.length;
    if(remaining > 0){
        textError.textContent = remaining + "characters remaining";
        return false;
    }
    textError.innerHTML ='<i class="fa-solid fa-circle-check"></i>'
        return true;
};

/* match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) */

function validadteAll(){
    if(!validateFullname() || !validateMail() || !validateTel() || !validateText()  ){
        formError.textContent = "fill the blanks";
        return false;
    }
    
};