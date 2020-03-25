export const getPopularMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8141f3812ccf318ea2b3af0fed27f73f`);
    return await response.json();
}


export const getTopRated = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=8141f3812ccf318ea2b3af0fed27f73f&language=en-USundefined`);
    return await response.json();
}

export const getNowPlaying = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=8141f3812ccf318ea2b3af0fed27f73f&language=en-USundefined`);
    return await response.json();
}

export const getUpcoming = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=8141f3812ccf318ea2b3af0fed27f73f&language=en-USundefined`);
    return await response.json();
}