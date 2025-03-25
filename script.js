// Array of image URLs
const images = [
    "https://picsum.photos/id/237/900/1300",
    "https://picsum.photos/seed/picsum/900/1200",
    "https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI",
    "https://fastly.picsum.photos/id/32/4032/3024.jpg?hmac=n7I3OdGszMIwuGcvplNthgBmAxvAZ3rNBBSuDFZaItQ"
];

let currentIndex = 0;

const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


slider.src = images[currentIndex];

function showImage(index) {
    slider.src = images[index];
    slider.style.transform = "scale(1)";
    setTimeout(() => slider.style.transform = "scale(1)", );
}


nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});


prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});
