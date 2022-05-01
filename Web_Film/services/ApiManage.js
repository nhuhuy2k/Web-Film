const apiKey = "d386a82ea55b2f97b7474a45b83c016f";
export const urlBackground = "https://image.tmdb.org/t/p/original/";
export const srcPoster = "https://image.tmdb.org/t/p/w500/";
export const urlYoutube ="https://www.youtube.com/embed/"
const theMovieDBUrl = "https://api.themoviedb.org/3"
const category = {
    movie: "movie",
    tv: "tv"
}
const movieType = {
    popular: "popular",
    top_rated: "top_rated",
    upcoming: "upcoming",
    similar: "similar",
    credits: "credits",
    videos: "videos"
}
const listMovieId = [
    414906,
    335787,
    634649,
    508947
]
export async function getData(url) {
    const response = await fetch(url, {
        method: 'Get',
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
        },

    });
    return response.json();
}

export function getTrendingMovie() {
     const urlApi = `${theMovieDBUrl}/${category.movie}/${movieType.popular}?api_key=${apiKey}`;
   return getData(urlApi, {}) 
}

export function getTopRateMovie() {
    const urlApiTopRateMovie = `${theMovieDBUrl}/${category.movie}/${movieType.top_rated}?api_key=${apiKey}`
   return getData(urlApiTopRateMovie, {})
};

export function getTrendingTv() {
    const urlApiTrendingTv = `${theMovieDBUrl}/${category.tv}/${movieType.popular}?api_key=${apiKey}`
   return getData(urlApiTrendingTv, {})
}

export function getTopRateTv() {
    const urlApiTopRateTv = `${theMovieDBUrl}/${category.tv}/${movieType.top_rated}?api_key=${apiKey}`
  return  getData(urlApiTopRateTv, {})     
}


export function getSimilarMovie(){
    const urlApiSimilarMovie =`${theMovieDBUrl}/${category.movie}/313233/${movieType.similar}?api_key=${apiKey}`
    return getData(urlApiSimilarMovie, {})
}

export function getCategoriesMovie(){
    const urlApiCategory =`${theMovieDBUrl}/${category.movie}/414906?api_key=${apiKey}`
    return getData(urlApiCategory, {})
}

export function getCasts(){
    // https://api.themoviedb.org/3/movie/414906/credits?api_key=2199f9775718734b07129fef98b449e2
    const urlApiCasts = `${theMovieDBUrl}/${category.movie}/414906/${movieType.credits}?api_key=${apiKey}`
    return getData(urlApiCasts, {})
}
export function getMovieTrailer(number) {
    const urlApiMovieTrailer = `https://api.themoviedb.org/3/movie/${listMovieId[`${number}`]}/videos?api_key=d386a82ea55b2f97b7474a45b83c016f`
    return getData(urlApiMovieTrailer, {})
}