// // let header= document.getElementsByClassName('js_header')

// // function changeColorHeader(){
// //     header.classlist.add('shink')
// // }

// let mordalTrailer = document.getElementById('modal_trailer');

// function openModalTrailer(){
//     mordalTrailer.classList.add("open_modal_trailer")
// }

// function closeModalTrailer(){
//     mordalTrailer.classList.remove("open_modal_trailer")
// }

// header listenEvent
window.onscroll = function(){
    let header = document.getElementById("header")
   console.info(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 0 || document.body.scrollTop > 0){
        header.classList.add("shink")
    } else {
        header.classList.remove("shink")
    }
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
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlider, 10000);
  }
