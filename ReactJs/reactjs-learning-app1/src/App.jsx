import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/search";
import Spinner from "./components/spinner";
import { getPopularMovies } from "./services/api";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPopularMovies(setErrorMessage, setMovieList, setIsLoading);
  }, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero logo" />
          <h1>
            Find all <span className="text-gradient">Movies</span> you'll Enjoy
          </h1>
        </header>
        <Search searchText={searchText} setSearchText={setSearchText} />

        <section className="movies-list">
          <h2>Popular Movies</h2>
          <br/>
          {isLoading ? (
            <Spinner/>
          ) : errorMessage ? (
            <p className="text-red-500 error-message">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <p key={movie.id} className="text-white">{movie.title}</p>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
