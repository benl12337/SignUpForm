const inputTwo = document.querySelector('#passwordTwo');
const inputOne = document.querySelector('#passwordOne');

const containsUppercase = document.querySelector('#containsUppercase');
const containsNumber = document.querySelector('#containsNumber');
const containsLength = document.querySelector('#containsLength');


inputTwo.addEventListener('input', function() {
    if (inputTwo.value != inputOne.value) {
        inputTwo.className = "invalid";
    } else {
        inputTwo.className = "valid";
    }
}); 

inputOne.addEventListener('input', function() {
    const inputPass = this.value;
    console.log(inputPass.length); 

    if (inputPass.length > 8) {
        containsLength.textContent = '✔';
        containsLength.className = 'requirementFulfilled';
    } else {
        containsLength.textContent = '✘';
        containsLength.className = 'notFulfilled';
    }

    // loop through to check if uppercase or there is a number
    let containsUpper = false;
    let containsaNumber = false;
    for (let i = 0; i < inputPass.length; i++) {
        if(inputPass[i].toUpperCase() != inputPass[i].toLowerCase()) {
            if (inputPass[i] == inputPass[i].toUpperCase()) {
                containsUpper = true;
            }
        } 
        if (parseInt(inputPass[i])) {
            console.log('true love')
            containsaNumber = true;
        }
    }

    if (containsUpper) {
        containsUppercase.textContent = '✔';
        containsUppercase.className = 'requirementFulfilled';
    } else {
        containsUppercase.textContent = '✘';
        containsUppercase.className = 'notFulfilled';
    } 

    if (containsaNumber) {
        containsNumber.textContent = '✔';
        containsNumber.className = 'requirementFulfilled';
    } else {
        containsNumber.textContent = '✘';
        containsNumber.className = 'notFulfilled';
    }
    
});



