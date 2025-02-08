import React, {useEffect, useState} from "react";
import "./App.css";
import Search from "./components/search";
import Spinner from "./components/spinner";
import {getPopularMovies} from "./services/api";
import MovieCard from "./components/MovieCard.jsx";
import {useDebounce} from "react-use";

const App = () => {
    const [searchText, setSearchText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [debouncedSearchText, setDebouncedSearchText] = useState('');

    useDebounce(() => {
        setDebouncedSearchText(searchText);
    }, 500, [searchText]);

    useEffect(() => {
        getPopularMovies(setErrorMessage, setMovieList, setIsLoading, debouncedSearchText);
    }, [debouncedSearchText]);

    return (
        <main>
            <div className="pattern"/>
            <div className="wrapper">
                <header>
                    <img src="/hero.png" alt="Hero logo"/>
                    <h1>
                        Find all <span className="text-gradient">Movies</span> you'll Enjoy
                    </h1>
                    <Search searchText={searchText} setSearchText={setSearchText}/>
                </header>

                <section className="movies-list all-movies">
                    <h2 className="mt-[40px] mb-[40px]">Popular Movies</h2>
                    {isLoading ? (
                        <Spinner/>
                    ) : errorMessage ? (
                        <p className="text-red-500 error-message">{errorMessage}</p>
                    ) : (
                        <ul>
                            {movieList.map((movie) => (
                                <MovieCard key={movie.id} movie={movie}/>
                            ))}
                        </ul>
                    )}
                </section>
            </div>
        </main>
    );
};

export default App;
