import { getTrendingMovie, srcPoster, getSearchMovie } from "../services/ApiManage.js"


    renderMovies();



var data = document.forms["search"]["data"].value   

async function render(data){
    const res = await getSearchMovie(data);
    console.log(res)
    const movieList = document.getElementById("movie__list")
    let stringHTML = "";
    res.results.forEach((item) => {
        stringHTML += `
            <div class="movie__item">
            <a  href="../detail_page/detail_page.html?category=movie&movie_id=${item.id}"> <img src="${srcPoster}${item.poster_path}" alt="" class="img__film">
            <h2 class="name__film">${item.original_title || item.title
            }</h2></a>
                </div>`;
    });
    movieList.innerHTML = stringHTML;
}

$(document).ready(function () {
    $(".btn__search").click(function () {
        render()
       
    })
})


async function renderMovies() {
    const res = await getTrendingMovie();
    const movieList = document.getElementById("movie__list")
    let stringHTML = "";
    res.results.forEach((item) => {
        stringHTML += `
            <div class="movie__item">
            <a  href="../detail_page/detail_page.html?category=movie&movie_id=${item.id}"> <img src="${srcPoster}${item.poster_path}" alt="" class="img__film">
            <h2 class="name__film">${item.original_title || item.title
            }</h2></a>
                </div>`;
    });
    movieList.innerHTML = stringHTML;
}

$(document).ready(function () {
    $(function () {
        $("#header__page").load("../header/header.html");
    });
    $(function () {
        $("#footer__page").load("../footer/footer.html");
    });

});
