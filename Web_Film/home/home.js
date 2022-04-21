// // let header= document.getElementsByClassName('js_header')

// Modal 
let modalTrailer = document.getElementById('modal');
let iframeTrailer = document.getElementById("iframe_trailer");
function openModalTrailer(url) {
    console.log(1);
    // iframeTrailer.setAttribute("src", url);
    // modalTrailer.style.display = "block";
}
function closeModalTrailer() {
    modalTrailer.style.display = "none";
    iframeTrailer.setAttribute("src", "");
}

////////////////////////////////////////////////////////////////////