const form = document.querySelector('.form');
const formSubmitted = document.querySelector('.form__submitted');
const ratingButton = document.querySelectorAll('.form__rtgbtn');
const submitButton = document.querySelector('.form__submitbtn');
const rate = document.querySelector('.rate');
let rateVal = 0;

function submitClick() {
  form.classList.add('hide');
  rate.textContent = rateVal;
  formSubmitted.classList.remove('hide');
}

function selectRate (e) {
  ratingButton.forEach(btn => { 
    btn.classList.remove('active');    
  });
  if (e.target.classList.contains('form__rtgbtn')) {
    e.target.classList.add('active');
  } else {
    e.target.parentElement.classList.add('active');
  }
  rateVal = e.target.textContent;
}

submitButton.addEventListener('click', submitClick);
ratingButton.forEach(btn => {
  btn.addEventListener('click', selectRate)
})
