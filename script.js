const photos = [
    "images/images.jpg",
    "images/images1.jpg",
    "images/images2.jpg"
];

let currentPhoto = 0;

const carouselImage = document.getElementById("carousel-image");

function showNextPhoto() {
    currentPhoto = (currentPhoto + 1) % photos.length;
    carouselImage.src = photos[currentPhoto];
}

carouselImage.addEventListener("click", showNextPhoto);