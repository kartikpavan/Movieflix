const key = import.meta.env.VITE_MOVIE_API_KEY;

export const requests = {
	requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
	requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
	requestTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`,
	requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
	requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
	requestSuspense: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=suspense&page=1&include_adult=false`,
	requestAction: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=action&page=1&include_adult=false`,
	requestThriller: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=thriller&page=1&include_adult=false`,
};
