import { API_URL } from "../../env";
import { getDefaultReqOption } from "../common";
import { Genre, Movie } from "../model/movie.models";

export function getPopularMovies(): Promise<Movie[]> {
    const reqOption = getDefaultReqOption();
    reqOption.method = "GET";
    return fetch(API_URL + "/api/popular-movies", reqOption ).then(resp => resp.json());
}

export function getGenres(): Promise<Genre[]> {
    const reqOption = getDefaultReqOption();
    reqOption.method = "GET";
    return fetch(API_URL + "/api/genres", reqOption ).then(resp => resp.json());
}