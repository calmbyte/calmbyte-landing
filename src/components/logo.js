const animations = {
  eyeRolls: `
  <style>
    #eye-right {
      animation: eyeRoll 2.2s 1s infinite;
    }
  
    #eye-left {
      animation: eyeRoll 2.2s 1s infinite;
    }

    @keyframes eyeRoll {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(-30px);
      }
      100%: {
        transform: translateX(0);
      }
    }
  </style>
  `,
  eyeRoll: `
  <style>
    #eye-right {
      animation: eyeRoll 1s 1;
    }
  
    #eye-left {
      animation: eyeRoll 1s 1;
    }

    @keyframes eyeRoll {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(-30px);
      }
      100%: {
        transform: translateX(0);
      }
    }
  </style>
  `,
};

const svg = ({ w = 20, h = 22, animation }) => `
<svg
width=${w}
height=${h}
viewBox="0 0 513 625"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
${animation}
<path
  d="M512.312 325.343V479.085C512.312 563.523 460.344 608.878 386.439 608.878C325.696 608.878 286.164 577.374 274.456 540.833C264.203 572.337 228.353 624.63 147.833 624.63C45.3751 624.63 0 558.463 0 481.603V325.343H512.312ZM36.623 358.725V482.863C36.623 540.833 70.2906 589.349 145.673 589.349C210.803 589.349 255.451 553.426 255.451 464.592V358.725H36.623ZM292.029 467.729C292.029 543.97 324.969 572.956 384.257 572.956C434.747 572.956 475.734 542.711 475.734 480.962V358.725H292.029V467.729Z"
  fill="var(--logo-color)"
/>
<path
  d="M256.156 36.8614C377.437 36.8614 475.712 135.86 475.712 257.984H512.312C512.312 115.507 397.646 0 256.156 0C114.688 0 0 115.507 0 257.984H36.6002C36.6229 135.86 134.921 36.8614 256.156 36.8614Z"
  fill="var(--logo-color)"
/>
<path
  d="M512.333 258.257H0.0213623V291.661H512.333V258.257Z"
  fill="var(--logo-color)"
/>
<path
  d="M142.147 508.091C165.311 508.091 184.089 489.179 184.089 465.85C184.089 442.52 165.311 423.608 142.147 423.608C118.983 423.608 100.205 442.52 100.205 465.85C100.205 489.179 118.983 508.091 142.147 508.091Z"
  fill="var(--logo-color)"
  id="eye-ball-left"
/>
<path
  d="M383.87 508.091C407.034 508.091 425.812 489.179 425.812 465.85C425.812 442.52 407.034 423.608 383.87 423.608C360.706 423.608 341.927 442.52 341.927 465.85C341.927 489.179 360.706 508.091 383.87 508.091Z"
  fill="var(--logo-color)"
  id="eye-ball-right"
/>
<path
  d="M398.372 478.1C406.37 478.1 412.853 471.571 412.853 463.516C412.853 455.461 406.37 448.932 398.372 448.932C390.375 448.932 383.891 455.461 383.891 463.516C383.891 471.571 390.375 478.1 398.372 478.1Z"
  fill="white"
  id="eye-right"
/>
<path
  d="M156.629 478.1C164.626 478.1 171.11 471.571 171.11 463.516C171.11 455.461 164.626 448.932 156.629 448.932C148.631 448.932 142.148 455.461 142.148 463.516C142.148 471.571 148.631 478.1 156.629 478.1Z"
  fill="white"
  id="eye-left"
/>
</svg>
`;

class Logo extends HTMLElement {
  static observedAttributes = ['size', 'animation'];

  w;
  h;
  fillColor;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    // this.shadowRoot.innerHTML = svg();
  }

  attributeChangedCallback(name, __, newValue) {
    if (name === 'size') {
      this.w = parseInt(newValue, 10);
      this.h = this.w * 1.2;

      this.shadowRoot.innerHTML = svg({
        w: this.w,
        h: this.h,
        animation: '',
      });
    }

    if (name === 'animation') {
      this.shadowRoot.innerHTML = svg({
        w: this.w,
        h: this.h,
        animation: animations[newValue] || '',
      });
    }
  }
}

customElements.define('main-logo', Logo);
