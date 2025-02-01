// for the placeholder for the input-one 


const placeholderText = document.querySelector('.placeholder-text');
const cursor = document.querySelector('.cursor');
const text = 'How may we be of assistance...';
const placeholderInput = document.querySelector('.input-one');

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







// the second display
const picLast = document.querySelector('.pic-last');
const numOne = document.querySelector('.num-one');
const numTest = document.querySelector('.num-test');


// Add an event listener to the picLast element
picLast.addEventListener('click', (e) => {
    // Hide  the picLast and numOne elements
    picLast.style.display = 'none';
    numOne.style.display = 'none';

    // show the numTest element
    numTest.style.display = 'block';


    // Wait  for 2 seconds before redirecting  to the chat page 
    setTimeout(() => {
        window.location.href = 'chat.html';
    }, 6000);
});


// this is the code for the loading display...




// let's take task two carefully
const buttonOne = document.querySelector('.button-setup');
buttonOne.focus(); // set the first button to focus 




const ImageOne = document.querySelector('.but-one');
const buttonTwo = document.querySelector('.button-setup-two');
const ImageTwo = document.querySelector('.but-two');
const buttonThree = document.querySelector('.button-setup-three');
const ImageThree = document.querySelector('.but-three');


buttonTwo.addEventListener('click', () => {
    console.log('Button Two clicked!');
    buttonTwo.focus();
    ImageTwo.style.visibility = 'visible';
    ImageOne.style.visibility = 'hidden';
    ImageThree.style.visibility = 'hidden';
});

buttonOne.addEventListener('click', () => {
    console.log('Button One clicked!');
    buttonOne.focus();
    ImageOne.style.visibility = 'visible';
    ImageTwo.style.visibility = 'hidden';
    ImageThree.style.visibility = 'hidden';
});

buttonThree.addEventListener('click', () => {
    console.log('Button Three clicked!');
    buttonThree.focus();
    ImageThree.style.visibility = 'visible';
    ImageOne.style.visibility = 'hidden';
    ImageTwo.style.visibility = 'hidden';
});

// the end of the ......





// this is for the button list selection


const navFourUl = document.querySelector('.nav-four ul');
let translateX = 0;
let speed = -1;

function slide() {
    translateX += speed;
    navFourUl.style.transform = `translateX(${translateX}px)`;

    if (translateX < -navFourUl.offsetWidth) {
        translateX = 0;
    }

    requestAnimationFrame(slide);
}

slide();



const ThinkOneUl = document.querySelector('.think-one ul');



function slideOne() {
    translateX += speed;
    ThinkOneUl.style.transform = `translateX(${translateX}px)`;

    if (translateX < -ThinkOneUl.offsetWidth) {
        translateX = 0;
    }

    requestAnimationFrame(slideOne);
}

slideOne();
