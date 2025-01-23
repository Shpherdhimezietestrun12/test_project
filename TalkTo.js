const imaging = document.querySelector('.div-one');
const images = ['two', 'one', 'download', 'three'];
let currentImage = 0;
setInterval(() => {
    imaging.classList.remove(...images);
    imaging.classList.add(images[currentImage]);
    currentImage = (currentImage + 1) % images.lenght;

}, 10000);

image.classList.add(images[0]);
