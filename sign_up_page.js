// for the signup page....
// // for the placeholder for the input-100


const placeholderText = document.querySelector('.placeholder-text');
const cursor = document.querySelector('.cursor');
const text = 'Please fill in Email here....';
const placeholderInput = document.querySelector('.input-100');

let i = 0;

const writeText = () => {
    if (i < text.length) {
        placeholderText.textContent = text.slice(0, i + 1);
        i++;
        setTimeout(writeText, 1100); // adjust the speed here
    } else {
        cursor.style.animationPlayState = 'running';
    }
};

writeText();


placeholderInput.addEventListener('focus', () => {
    placeholderText.remove();
    cursor.remove();
});




// for the second input settings
const placeholderText_two = document.querySelector('.placeholder-text-100');
const cursor_two = document.querySelector('.cursor-100');
const text_two = 'Kindly fill related passwords here..';
const placeholderInput_two = document.querySelector('.input-101');



const writeText_two = () => {
    if (i < text_two.length) {
        placeholderText_two.textContent = text_two.slice(0, i + 1);
        i++;
        setTimeout(writeText_two, 1100); // adjust the speed here
    } else {
        cursor_two.style.animationPlayState = 'running';
    }
};

writeText_two();


placeholderInput_two.addEventListener('focus', () => {
    placeholderText_two.remove();
    cursor_two.remove();
});