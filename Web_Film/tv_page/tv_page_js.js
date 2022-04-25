import { getTrendingTv, srcPoster } from "../services/ApiManage.js"



renderTv();

async function renderTv() {
    const res = await getTrendingTv();
        const movieList = document.getElementById("movie__list");
        let stringHTML = "";

        res.results.forEach((item) => {
            stringHTML += `
            <div class="movie__item">
                   <a href="../detail_page/detail_page.html"> <img src="${srcPoster}${item.poster_path}" alt="" class="img__film">
                    <h2 class="name__film">${item.original_name || item.name
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
