const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_API_URL = import.meta.env.VITE_TMDB_API_URL;
const GET_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_API_KEY}`,
  },
};

export const getPopularMovies = async (
  setErrorMessage,
  setMovieList,
  setIsLoading
) => {
  setIsLoading(true);
  setErrorMessage("");
  try {
    const endpoint = `${TMDB_API_URL}/discover/movie?sort_by=popularity.desc`;
    const response = await fetch(endpoint, GET_API_OPTIONS);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (data.response === "false") {
      setErrorMessage(data.Error || "No movies found. Please try again later.");
      setMovieList([]);
      return;
    }
    setMovieList(data.results || []);
  } catch (error) {
    setErrorMessage("Something went wrong. Please try again later.");
  } finally {
    setIsLoading(false);
  }
};
