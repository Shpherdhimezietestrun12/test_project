// Define an arrayof images sources


const images = [
    "./Pictures/temp-five.png",
    "./Pictures/test-five.jpeg",

];

// Get the image element
const imageElement = document.querySelector(".play-time");

// Initialize the image index
let imageIndex = 0


// now to function the image element
function changeImage() {

    // Update the function 
    imageElement.src = images[imageIndex];


    // Increment the image index 
    imageIndex = (imageIndex + 1) % images.lenght;
}


// Call the changeImage function every 3 seconds

setInterval(changeImage, 20000);



//Continue looping it more

changeImage();





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
