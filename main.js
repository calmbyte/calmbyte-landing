import './style.css';

const type = document.querySelector('.type-text');

const listTexts = ['new great experience!', 'personalized AI assistance.', 'super duper software!'];

let index = -1;
let current = 0;

function typeTextFunc() {
    if (current === listTexts.length) {
        current = 0;
    }
    const typeIntervalId = setInterval(() => {
        if (index === listTexts[current].length - 1) {
            clearInterval(typeIntervalId);
            setTimeout(() => {
              clearTextFunc();
            }, 350);
        } else {
            index++;
            type.textContent += listTexts[current][index];
        }
    }, 85);
};

function clearTextFunc() {
    const clearIntervalId = setInterval(() => {
        if (type.textContent.length == 0) {
            clearInterval(clearIntervalId);
            index = -1;
            current++
            typeTextFunc();
        } else {
            type.textContent = type.textContent.slice(0, -1)
        }
    }, 50);
};

typeTextFunc();