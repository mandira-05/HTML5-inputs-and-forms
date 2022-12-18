const NAME_REGEX = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');

text.addEventListener('input', function() {
    if (NAME_REGEX.test(text.value)) {
        textError.textContent = "";
    } else {
        textError.textContent = "NAME Is Incorrect!";
    }
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
})
