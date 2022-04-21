var apiKey = "d386a82ea55b2f97b7474a45b83c016f";
var urlApi = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
var  urlApiTopRateMovie =`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
var urlApiTrendingTv = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`
var urlApiTopRateTv = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`


async function getData(url, data) {
   
    const response = await fetch(url, {
        method: 'Get', 
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
        },
        
    });
    return response.json(); 
}



