import { useEffect, useState } from "react";
import { getGenres, getPopularMovies } from "../../../services/api/movie-api";
import { Genre, Movie } from "../../../services/model/movie.models";
import Billboard from "./billboard/billboard";
import SeriesList from "./series-list/series-list";

const Main = () => {
    const [movies, setMovies] = useState<Map<number, Movie[]>>(new Map());
    const [genres, setGenres] = useState<Genre[]>([])  
    useEffect(() => {
      getPopularMovies().then(movies => {
        getGenres().then(genres=> {
            const moviesByGenre = new Map();
            const genreIds = new Set(movies.map(x=> x.genreId));
            genreIds.forEach(genreId => {
                moviesByGenre.set(genreId, movies.filter(x=> x.genreId === genreId))
            });
            setMovies(moviesByGenre)
            setGenres(genres)
        })
      })
    }, [])

    const showMovieList = () => {
        const result: any[] = [];
        movies.forEach((movies, genreId) => {
            const genre = genres.find(x => x.id === genreId)
            result.push(<SeriesList movies={movies} genre={genre} key={genreId} />)
        })
        return result;
    }

    return (
        <main>
            <Billboard />
            {showMovieList()}
        </main>
    );
}

export default Main;