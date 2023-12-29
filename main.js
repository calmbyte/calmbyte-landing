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

const aboutUsContainer = document.querySelector('.about-us');

const observer = new IntersectionObserver(
  (entries) => {
    const [aboutUsObserver] = entries;

    if (aboutUsObserver.isIntersecting) {
      aboutUsContainer.querySelectorAll('main > div').forEach((node) => {
        node.classList.add('visible');
      });
    }
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
  }
);

observer.observe(aboutUsContainer);
