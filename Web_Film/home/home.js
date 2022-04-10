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