var apiKey = "d386a82ea55b2f97b7474a45b83c016f";
export const urlBackground = "https://image.tmdb.org/t/p/original/";
export const srcPoster = "https://image.tmdb.org/t/p/w500/";
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
    credits: "credits"
}

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

export function getMovieTrailer() {
    const urlMovieTrailer = `${theMovieDBUrl}/${category.movie}/${movieType.upcoming}?api_key=${apiKey}&language=en-US&page=1`
  return  getData(urlMovieTrailer, {})     
}

export function getSimilarMovie(){
    const urlApiSimilarMovie =`${theMovieDBUrl}/${category.movie}/313233/${movieType.similar}?api_key=${apiKey}`
    return getData(urlApiSimilarMovie, {})
}

export function getCategoriesMovie(){
    // https://api.themoviedb.org/3/movie/414906?api_key=2199f9775718734b07129fef98b449e2
    // https://api.themoviedb.org/3/movie/212122?api_key=<<api_key>>&language=en-US
    const urlApiCategory =`${theMovieDBUrl}/${category.movie}/414906?api_key=${apiKey}`
    return getData(urlApiCategory, {})
}

export function getCasts(){
    // https://api.themoviedb.org/3/movie/414906/credits?api_key=2199f9775718734b07129fef98b449e2
    const urlApiCasts = `${theMovieDBUrl}/${category.movie}/414906/${movieType.credits}?api_key=${apiKey}`
    return getData(urlApiCasts, {})
}
