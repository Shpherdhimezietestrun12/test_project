// Define an arrayof images sources


const images = [
    "./Pictures/test-five.jpeg",
    "./Pictures/temp-five.png",
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

setInterval(changeImage, 3000);



//Continue looping it more

changeImage();
