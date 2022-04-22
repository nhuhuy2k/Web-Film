var apiKey = "d386a82ea55b2f97b7474a45b83c016f";
export var urlApi = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
export var  urlApiTopRateMovie =`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
export var urlApiTrendingTv = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`
export var urlApiTopRateTv = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`
export let urlApiTrailer = `https://api.themoviedb.org/3/movie/256789/watch/providers?api_key=${apiKey}`

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
//use function getTopRateMovie(){getData()}


export default getData



