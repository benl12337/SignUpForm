const inputTwo = document.querySelector('#passwordTwo');
const inputOne = document.querySelector('#passwordOne');
inputTwo.addEventListener('input', function() {
    if (inputTwo.value != inputOne.value) {
        inputTwo.className = "invalid";
    } else {
        inputTwo.className = "valid";
    }
}); 