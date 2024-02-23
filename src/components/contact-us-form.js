export class ContactUsForm {
  #fullNameNode;
  #emailNode;
  #messageNode;

  #form;
  #formLogo;

  #animationTimeoutId;

  constructor() {
    this.#form = document.querySelector('.contact-us-form');

    this.#fullNameNode = document.querySelector('[name="full_name"]');
    this.#emailNode = document.querySelector('[name="email"]');
    this.#messageNode = document.querySelector('[name="message"]');

    this.#formLogo = document.querySelector('.form-container main-logo');

    this.init();
  }

  init() {
    [this.#fullNameNode, this.#emailNode, this.#messageNode].forEach((node) => {
      node.addEventListener('blur', this.#handleBlur.bind(this));
      node.addEventListener('focus', this.#handleFocus.bind(this));
    });

    this.#fullNameNode.addEventListener(
      'focus',
      this.#resetLogoPosition.bind(this)
    );

    this.#emailNode.addEventListener('focus', this.#focusEmail.bind(this));

    this.#messageNode.addEventListener('focus', this.#focusMessage.bind(this));

    this.#form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const form = e.target;

      const button = form.querySelector('button');
      button.disabled = true;
      button.textContent = 'Sending';
      try {
        const formData = new FormData(form);
        const res = await fetch(import.meta.env.VITE_FEEDBACK_BASE_URL, {
          method: 'POST',
          body: JSON.stringify(Object.fromEntries(formData)),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const { message } = await res.json();

        this.#showFeedback(message);
        this.#handleSubmit();
      } catch (error) {
        console.log(error);
      } finally {
        button.textContent = 'Send';
        button.disabled = false;
        this.#resetLogoPosition();
      }
    });
  }

  #showFeedback(feedback) {
    const node = document.querySelector('.form-success-feedback');
    node.classList.add('visible');
    node.textContent = feedback;
    setTimeout(() => {
      node.classList.remove('visible');
      node.textContent = '';
    }, 7000);
  }

  #handleSubmit() {
    [this.#fullNameNode, this.#emailNode, this.#messageNode].forEach((node) => {
      node.value = '';
    });
  }

  #focusMessage() {
    this.#formLogo.classList.remove('email');
    this.#formLogo.classList.add('message');
  }

  #focusEmail() {
    this.#formLogo.classList.remove('message');
    this.#formLogo.classList.add('email');
  }

  #resetLogoPosition() {
    this.#formLogo.classList.remove('message');
    this.#formLogo.classList.remove('email');
  }

  #handleFocus() {
    if (this.#animationTimeoutId) {
      clearTimeout(this.#animationTimeoutId);
    }
    this.#formLogo.removeAttribute('animation');
  }

  #handleBlur() {
    if (this.#animationTimeoutId) {
      clearTimeout(this.#animationTimeoutId);
    }
    this.#animationTimeoutId = setTimeout(() => {
      this.#formLogo.setAttribute('animation', 'eyeRoll');
    }, 800);
  }
}
