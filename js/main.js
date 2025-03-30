let layer = document.querySelector(".fade-layer");
layer.addEventListener("click", showMenu);

let button = document.querySelector(".menu-button");
button.addEventListener("click", showMenu);

function showMenu() {
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible");

     
    let buttonIcon = document.querySelector(".menu-button i");
    let button = document.querySelector(".menu-button");
 
    if (menu.classList.contains("show")) {
        buttonIcon.textContent = 'close';  
        button.classList.add('x');         
    } else {
        buttonIcon.textContent = 'menu';  
        button.classList.remove('x');     
    }
}
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function updateCarousel() {
    const newTransformValue = -currentIndex * 100; 
    document.querySelector('.carousel').style.transform = `translateX(${newTransformValue}%)`;
}

document.querySelector('.left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    updateCarousel();
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});