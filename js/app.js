const form = document.querySelector('.form');
const formSubmitted = document.querySelector('.form__submitted');
const ratingButton = document.querySelectorAll('.form__rtgbtn');
const submitButton = document.querySelector('.form__submitbtn');
const rate = document.querySelector('.rate');


function submitClick() {
  form.classList.add('hide');
  formSubmitted.classList.remove('hide');
}

submitButton.addEventListener('click', submitClick);