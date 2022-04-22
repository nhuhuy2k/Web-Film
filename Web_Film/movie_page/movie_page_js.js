import getData, { urlApi } from "../services/ApiManage.js"
const srcPoster = "https://image.tmdb.org/t/p/w500/";



getDataMovies();

function getDataMovies() {
    let stringHTML = "";
    getData(urlApi, {}).then((data) => {
        const movieList = document.getElementById("movie__list");
        let results = data.results

        results.forEach((item) => {
            stringHTML += `
            <div class="movie__item">
            <a href="../detail_page/detail_page.html"> <img src="${srcPoster}${item.poster_path}" alt="" class="img__film">
            <h2 class="name__film">${item.original_title || item.title
        }</h2></a>
                </div>`;
        });
        movieList.innerHTML = stringHTML;
    })
}

$(document).ready(function () {
    $(function () {
        $("#header__page").load("../header/header.html");
    });
    $(function () {
        $("#footer__page").load("../footer/footer.html");
    });

});
