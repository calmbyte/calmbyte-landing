import './style.css';

import './src/components/logo';
import { ContactUsForm } from './src/components/contact-us-form';

document.querySelector('.hero .arrows').addEventListener('click', () => {
  document.querySelector('.about-us').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.about-us .arrows').addEventListener('click', () => {
  document.querySelector('.contact-us').scrollIntoView({ behavior: 'smooth' });
});

const contactUs = new ContactUsForm();
