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

// Load CV data from JSON
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("full-name").textContent =
            data.firstName + " " + data.lastName;

        document.getElementById("email").textContent = data.email;
        document.getElementById("age").textContent = data.age;
        console.log("age loaded:" , data.age);

        data.skills.forEach(skill => {
            const p = document.createElement("p");
            p.textContent = skill;
            document.getElementById("skills").appendChild(p);
        });

        data.languages.forEach(language => {
            const p = document.createElement("p");
            p.textContent = language;
            document.getElementById("languages").appendChild(p);
        });
    })
    .catch(error => {
        console.error("Error loading JSON data:", error);
    });