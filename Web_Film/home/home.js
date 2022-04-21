// // let header= document.getElementsByClassName('js_header')

// Modal 
let modalTrailer = document.getElementById('modal');
let iframeTrailer = document.getElementById("iframe_trailer");
function openModalTrailer(url) {
    iframeTrailer.setAttribute("src", url);
    modalTrailer.style.display = "block";
}
function closeModalTrailer() {
    modalTrailer.style.display = "none";
    iframeTrailer.setAttribute("src", "");
}

// Show Slider
var slideIndex = 0;
showSlider();
function showSlider() {
    var i;
    var slides = document.getElementsByClassName("slide_item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlider, 5000);
}

////////////////////////////////////////////////////////////////////