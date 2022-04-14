

var headerPage =
    ` <div div id = "header" >
   <a href="#" class="logo"><img class="logo_img" src="../asset/img/logo.1e58b23f.png" alt="">
       <p class="logo_text">MOVIE</p>
   </a>
   <ul class="nav_menu">
       <li class="nav_item "><a href="">Home</a></li>
       <li class="nav_item "><a href="../movie_page/movie_page.html">Movies</a></li>
       <li class="nav_item"><a href="">TV series</a></li>
   </ul>
   </div>`

// var header = document.getElementById("header1").innerHTML = headerPage

// document.getElementById("main").innerHTML = headerPage
window.onscroll = function () {
    let header = document.getElementById("header")
    console.info(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
        header.classList.add("shink")
    } else {
        header.classList.remove("shink")
    }
}