import './style.css';

import './src/components/logo';

document.querySelector('.hero .arrows').addEventListener('click', () => {
  document.querySelector('.about-us').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.about-us .arrows').addEventListener('click', () => {
  document.querySelector('.contact-us').scrollIntoView({ behavior: 'smooth' });
});

const formLogo = document.querySelector('.form-container main-logo');
let timeoutId;

function handleBlur() {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    formLogo.setAttribute('animation', 'eyeRoll');
  }, 800);
}

function handleFocus() {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  formLogo.removeAttribute('animation');
}

document.querySelector('[name="fullName"]').addEventListener('focus', () => {
  handleFocus();
  formLogo.classList.remove('message');
  formLogo.classList.remove('email');
});

document.querySelector('[name="email"]').addEventListener('focus', () => {
  handleFocus();
  formLogo.classList.remove('message');
  formLogo.classList.add('email');
});

document.querySelector('[name="message"]').addEventListener('focus', () => {
  handleFocus();
  formLogo.classList.remove('email');
  formLogo.classList.add('message');
});

document
  .querySelector('[name="fullName"]')
  .addEventListener('blur', handleBlur);

document.querySelector('[name="email"]').addEventListener('blur', handleBlur);

document.querySelector('[name="message"]').addEventListener('blur', handleBlur);
