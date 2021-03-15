// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function initMap() {
    // The location of Uluru
    const uluru = { lat: 49.822, lng: 19.024 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: uluru,
    });
    // The marker, positioned at Uluru
    var iconBase = 'https://icons.iconarchive.com/icons/sensibleworld/starwars/16/Lightsaber-Red-icon.png';
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: iconBase
    });

}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } 
} 
setInterval(showSlides, 8000);
