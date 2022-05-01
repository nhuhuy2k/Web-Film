// // let header= document.getElementsByClassName('js_header')
import { getMovies, getTrendingMovie, getTopRateMovie, getTrendingTv, getTopRateTv, urlBackground, srcPoster, urlYoutube, getMovieTrailer } from "../services/ApiManage.js";
// Modal 
let modalTrailer = document.getElementById('modal');
let iframeTrailer = document.getElementById("iframe_trailer");


renderTrendingMovie()
renderTopRateMovie()
renderTrendingTv()
renderTopRateTv()
renderSlider()


$(document).ready(function () {
    $(function () {
        $("#header__page").load("../header/header.html");
    });
    $(function () {
        $("#footer__page").load("../footer/footer.html");
    });

});

async function renderSlider() {
    const res = await getTrendingMovie();
    const slider = document.getElementById("slider");
    let results = res.results
    let stringSlider = "";
    var x = 0;
    results.slice(0, 4).forEach((item) => {
       
        stringSlider += `<div class="slide_item fade" style="background-image: url(${urlBackground}${item.backdrop_path})">
             <div class="slide_container">
                <div class="content">
                    <h2 class="name_film fade_in">${item.original_title || item.title}</h2>
                    <p class="introduce fade_in">${item.overview}</p>
                    <div class="btns">
                        <a href="../detail_page/detail_page.html"><button class="btn btn_watch_now" value="${item.id}"> Watch now</button></a>
                         <button class="btn btn_watch_trailer" value="${item.id}"> Watch trailer</button >
                    </div >
                </div >
                <div class="poster">
                    <img src="${srcPoster}${item.poster_path}" class="poster_img fade_in">
                </div>
            </div >
        <a class="prev" >&#10094;</a>
	    <a class="next" >&#10095;</a>
        </div >
         `;
    });
    slider.innerHTML = stringSlider;

    var slideIndex = 0;
    showSlider();

    function showSlider() {
        var slides = document.getElementsByClassName("slide_item");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlider, 10000);
    }

    function plusSlides(n) {
        showSlides2(slideIndex += n);
    }

    function showSlides2(n) {
        var i;
        const slides = document.getElementsByClassName("slide_item");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"
        }
        slides[slideIndex - 1].style.display = "block";
    }
    

    $(document).ready(function () {
        $(".btn_watch_now").click(function () {
            getMovies(this.value)
        })
        $(".btn_watch_trailer").click(function () {
            renderMovieTrailer(this.value)
            async function renderMovieTrailer(value) {
                const res = await getMovieTrailer(value)
                let results = res.results[0].key
                console.log(results)
                $("#iframe_trailer").attr("src", `${urlYoutube}${results}`)
            }
            modalTrailer.style.display = "block";
        })
        $("#close_modal_trailer").click(function () {
            modalTrailer.style.display = "none"
            $("#iframe_trailer").attr("src", "")
        })

        $('.prev').click(function () {
            plusSlides(-1)
        })
        
        $('.next').click(function () {
            plusSlides(1)
        })
    });

}

async function renderTrendingMovie() {
    const res = await getTrendingMovie();
    const trendingMovie = document.getElementById("trending_movie");
    let stringTrendMovie = "";
    res.results.slice(0, 10).forEach((item) => {
        stringTrendMovie += `
                        <div class="movie">
                            <a href="../detail_page/detail_page.html"><img src="${srcPoster}${item.poster_path
            }" alt=""></a>
                            <h3>${item.original_title || item.title}</h3>
                        </div>
                        `;
    });
    trendingMovie.innerHTML = stringTrendMovie;

}

async function renderTopRateMovie() {
    const res = await getTopRateMovie();
    const topRateMovie = document.getElementById("top_rate_movies");
    let stringTopRateMovies = "";
    res.results.slice(0, 10).forEach((item) => {
        stringTopRateMovies += `
                        <div class="movie">
                            <a href="../detail_page/detail_page.html"><img src="${srcPoster}${item.poster_path
            }" alt=""></a>
                            <h3>${item.original_title || item.title}</h3>
                        </div>
                        `;
    });
    topRateMovie.innerHTML = stringTopRateMovies;

}
async function renderTrendingTv() {
    const res = await getTrendingTv();
    const trendingTv = document.getElementById("trending_tv");
    let stringTrendingTv = "";
    res.results.slice(0, 10).forEach((item) => {
        stringTrendingTv += `
                        <div class="movie">
                            <a href="../detail_page/detail_page.html"><img src="${srcPoster}${item.poster_path
            }" alt=""></a>
                            <h3>${item.original_name || item.name}</h3>
                        </div>
                        `;
    });
    trendingTv.innerHTML = stringTrendingTv;
}
async function renderTopRateTv() {
    const res = await getTopRateTv();
    const topRateTv = document.getElementById("top_rate_tv");
    let stringTopRateTv = "";
    res.results.slice(0, 10).forEach((item) => {
        stringTopRateTv += `
                        <div class="movie">
                            <a href="../detail_page/detail_page.html"><img src="${srcPoster}${item.poster_path
            }" alt=""></a>
                            <h3>${item.original_name || item.name}</h3>
                        </div>
                        `;
    });
    topRateTv.innerHTML = stringTopRateTv;
    slideCarousel()
}
function slideCarousel() {
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
