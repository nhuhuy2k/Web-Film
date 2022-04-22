// // let header= document.getElementsByClassName('js_header')
import getData, { urlApi, urlApiTopRateMovie, urlApiTrendingTv, urlApiTopRateTv } from "../services/ApiManage.js";
// Modal 
let modalTrailer = document.getElementById('modal');
let iframeTrailer = document.getElementById("iframe_trailer");
const urlBackground = "https://image.tmdb.org/t/p/original/";
const srcPoster = "https://image.tmdb.org/t/p/w500/";


$(document).ready(function () {
    $(function () {
        $("#header__page").load("../header/header.html");
    });
    $(function () {
        $("#footer__page").load("../footer/footer.html");
    });

});

getSlider();
getTrendingMovie();
getTopRateMovie();
getTrendingTv();
getTopRateTv();


function getSlider() {
    getData(urlApi, {}).then((data) => {
        const slider = document.getElementById("slider");
        let stringSlider = "";
        // JSON data parsed by `data.json()` call
        let results = data.results;
        //get video trailer youtobe
        //https://api.themoviedb.org/3/{{category}}/{{movie_id}}/videos?api_key={{api_key}}
        results.slice(0, 4).forEach((item) => {
            stringSlider += `<div class="slide_item fade"  style="background-image: url(${urlBackground}${item.backdrop_path
                })">
                    <div class="slide_container">
                        <div class="content">
                            <h2 class="name_film ">${item.original_title || item.title
                }</h2>
                            <p class="introduce">${item.overview}</p>
                            <div class="btns">
                                <button class="btn btn_watch_now"> Watch now</button>
                                <button class="btn btn_watch_trailer" id="btn_trailer"> Watch
                                    trailer</button >
                            </div >
                        </div >
                        <div class="poster">
                            <img src="${srcPoster}${item.poster_path
                }" class="poster_img">
                        </div>
                    </div >
                    <a class="prev " id="prev_js" /*onclick="plusSlides(-1)*/">&#10094;</a>
                     <a class="next " id="next_js" /*onclick="plusSlides(+1)*/">&#10095;</a>
                </div >
                
                `;

        });
        slider.innerHTML = stringSlider;

        const oppenTrailerModal = document.getElementById("btn_trailer");
        oppenTrailerModal.addEventListener("click", function () {
            modalTrailer.style.display = "block";
        })
        const closeTrailerModal = document.getElementById("close_modal_trailler");
        closeTrailerModal.addEventListener("click", function () {
            modalTrailer.style.display = "none";
        })

        var slideIndex = 0;
        showSlider();

        const prevSlide = document.getElementById('prev_js');
        prevSlide.addEventListener('click', plusSlides(-1))
        const nextSlide = document.getElementById('next_js');
        nextSlide.addEventListener('click', plusSlides(1))

        let slidess = document.getElementsByClassName("slide_item");
        console.log(slidess[0])

        function plusSlides(n) {
            showSlides2(slideIndex += n);
        }

        function showSlides2(n) {
            var i;
            var slides = document.getElementsByClassName("slide_item");

            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex - 1].style.display = "block";
        }

        function showSlider() {
            var slides = document.getElementsByClassName("slide_item");
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlider, 20000);
        }

    });
}
function getTrendingMovie() {
    getData(urlApi, {}).then((data) => {
        const trendingMovie = document.getElementById("trending_movie");
        let stringTrendMovie = "";
        let results = data.results;
        results.slice(0, 10).forEach((item) => {
            stringTrendMovie += `
                        <div class="movie">
                            <a href="../detail_page/detail_page.html"><img src="${srcPoster}${item.poster_path
                }" alt=""></a>
                            <h3>${item.original_title || item.title}</h3>
                        </div>
                        `;
        });
        trendingMovie.innerHTML = stringTrendMovie;
    })
}

function getTopRateMovie() {
    getData(urlApiTopRateMovie, {}).then((data) => {
        const topRateMovies = document.getElementById("top_rate_movies");
        let results = data.results.slice(0, 12);
        let stringTopRateMovies = "";
        results.forEach((item) => {
            stringTopRateMovies += `
                            <div class="movie">
                                <a href="../detail_page/detail_page.html"><img src="${srcPoster}${item.poster_path}" alt=""></a>
                                <h3>${item.original_title || item.title}</h3>
                            </div>
                            `;
        });
        topRateMovies.innerHTML = stringTopRateMovies;
    });
};

function getTrendingTv() {
    getData(urlApiTrendingTv, {}).then((data) => {
        const topRateMovies = document.getElementById("trending_tv");
        let results = data.results.slice(0, 12);
        let stringTrendingMovie = "";
        results.forEach((item) => {
            stringTrendingMovie += `
                            <div class="movie">
                                <a href="../detail_page/detail_page.html"><img src="${srcPoster}${item.poster_path
                }" alt=""></a>
                                <h3>${item.original_name || item.name}</h3>
                            </div>
                            `;
        });
        topRateMovies.innerHTML = stringTrendingMovie;

    });
}

function getTopRateTv() {
    getData(urlApiTopRateTv, {}).then((data) => {
        const topRateTv = document.getElementById("top_rate_tv");
        let results = data.results.slice(0, 12);
        let stringTopRateTv = "";
        results.forEach((item) => {
            stringTopRateTv += `
                            <div class="movie">
                                <a href="../detail_page/detail_page.html"><img src="${srcPoster}${item.poster_path
                }" alt=""></a>
                                <h3>${item.original_name || item.name}</h3>
                            </div>
                            `;

        });
        topRateTv.innerHTML = stringTopRateTv;
        slideRerounel()
    });
}
function slideRerounel() {
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
}


////////////////////////////////////////////////////////////////////