const form = document.getElementById('form1');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2')

//show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className= 'form-control success';
}

//email is valid
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim()))
        showSuccess(input)
    else
        showError(input,`Email is not valid`)
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        console.log(input);
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is Required`);
        }
        else
            showSuccess(input);
    })
}

function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'Passwords do not match');
    }

}
function getFieldName(input){
    console.log(input.id.charAt(0).toUpperCase() + input.id.slice(1));
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max){
    if(input.value.length < min)
        showError(input, `${getFieldName(input)} must be atleast ${min}`)

    else if(input.value.length > max)
        showError(input, `${getFieldName(input)} must be atmost ${max}`)
    else
        showSuccess(input);

}
//Event Listener
form.addEventListener('submit', function (e){
    e.preventDefault();
    /*if(username.value === ''){
        showError(username,'Username is required');
    }
    else{
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email,'Email is required');
    }
    else if(!isEmailValid(email.value))
    {
        showError(email,'Email is no valid')
    }
    else{
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password,'Password is required');
    }
    else{
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2,'Conform Password is required');
    }
    else{
        showSuccess(password2);
    }*/

    checkRequired([username,email, password2,password]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password,password2);
})
