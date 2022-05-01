import { getSimilarMovie, srcPoster, getTrendingMovie, urlBackground, getCategoriesMovie, getCasts, getMovies} from "../services/ApiManage.js"


$(document).ready(function () {
    $(function () {
        $("#header__page").load("../header/header.html");
    });
    $(function () {
        $("#footer__page").load("../footer/footer.html");
    });
})
renderBanner();
renderInfoMovie();
renderCategoriesMovie();
renderCasts()
renderSimilar();
async function renderInfoMovie() {
    const res = await getTrendingMovie();
    const movieInfo = document.getElementById("movie_content")
    let result = res.results[0]
    let stringHTML = `<div class="movie_content_poster">
    <div class="movie_content_poster_img"
        style="background-image: url(${srcPoster}${result.poster_path});"></div>
</div>
<div class="movie_content_info">
    <h2 class="title">${result.original_title || result.title}</h2>
    <div class="categories" id="categories_movie">
        
        
    </div>
    <div class="introduce">
        <p>${result.overview}</p>
    </div>

    <h2 class="title_casts">Casts</h2>
    <div class="casts" id="casts_list">
        
    </div>
</div>`;

    movieInfo.innerHTML = stringHTML;

}

async function renderBanner() {
    const res = await getTrendingMovie();
    const banner = document.getElementById("banner");
    let result = res.results[0]
    let stringHTML = `<img class="img_baner" src="${urlBackground}${result.backdrop_path}">`
    banner.innerHTML = stringHTML;
}

async function renderCategoriesMovie() {
    const res = await getCategoriesMovie();
    const category = document.getElementById("categories_movie");
    let result = res.genres;
    // console.log("")
    let stringHTML =""
    result.forEach((item) =>{
         stringHTML += `<span class="category">${item.name}</span>`
    });
    category.innerHTML = stringHTML;
}

async function renderCasts() {
    const res = await getCasts();
    const casts = document.getElementById("casts_list");
    let result = res.cast
    let stringHTML =""
    result.slice(0, 5).forEach((item) =>{
         stringHTML += `<div class="item">
         <div class="cast_img" style="background-image: url(${srcPoster}${item.profile_path});"></div>
         <h3 class="name_cast">${item.original_name}</h3>
     </div>`
    })
    
    casts.innerHTML = stringHTML;
}
renderIframeMovie()
function renderIframeMovie(){
    const res =  getMovies(0)
    const iframeMovie = document.getElementById("iframe_movie")
    iframeMovie.setAttribute("src", `${res}`)
}

async function renderSimilar() {
    const res = await getSimilarMovie();
    const listSimilarMovie = document.getElementById("list_similar")
    let stringHTML = ""

    res.results.slice(0, 10).forEach((item) => {
        stringHTML += `<div class="similar_film">
        <a href=""> <img class="similar_img" src="${srcPoster}${item.poster_path}" alt="">
        <h3 class="similar_name">${item.original_title || item.title}</h3></a>
    </div>  `
    });
    listSimilarMovie.innerHTML = stringHTML;
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                472: {
                    items: 2
                },
                685: {
                    items: 3
                },
                900: {
                    items: 4
                },
                1100: {
                    items: 5
                },
                1200: {
                    items: 6
                }

            }
        })
    })
}
