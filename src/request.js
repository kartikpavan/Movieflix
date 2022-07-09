const key = import.meta.env.VITE_MOVIE_API_KEY;

export const requests = {
	requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
	requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
	requestTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`,
	requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
	requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
	requestDrama: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=2&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=18`,
	requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=2&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=35`,
	requestAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=2&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=16`,
	requestAdventure: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=2&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=12`,

	requestFantasy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=2020-12-31&with_genres=14`,
	requestMusic: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=2020-12-31&with_genres=10402`,
	requestMystery: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=2020-12-31&with_genres=9648`,
	requestRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=2020-12-31&with_genres=10749`,
	requestScifi: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=2020-12-31&with_genres=878`,
	requestThriller: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=2020-12-31&with_genres=53`,
	requestWestern: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=2020-12-31&with_genres=37`,
};
