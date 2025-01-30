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
