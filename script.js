const inputs = document.querySelectorAll('input');
const incons = document.querySelectorAll('.input-icon');
const form = document.querySelector('.form');
form.addEventListener('focusin', function (e) {
  if (e.target.tagName === 'INPUT') {
    e.target.classList.add('input-selected');
  }
});
form.addEventListener('focusout', function (e) {
  if (e.target.tagName === 'INPUT') {
    e.target.classList.remove('input-selected');
  }
});
form.addEventListener('submit', function (e) {
  e.preventDefault();

  inputs.forEach((input, index) => {
    checkIfValue(input, index);
  });
});

inputs.forEach(function (input, index) {
  input.addEventListener('input', function () {
    checkIfValue(input, index);
  });
});

//FUNCTIONS
function checkIfValue(input, index) {
  if (input.value.trim() !== '') {
    input.classList.remove('danger');
    incons[index].classList.remove('show');
  } else {
    input.classList.add('danger');
    incons[index].classList.add('show');
  }
}
form.reset();
