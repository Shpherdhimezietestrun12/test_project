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
