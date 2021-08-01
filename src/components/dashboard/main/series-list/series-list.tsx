import { Genre, Movie } from '../../../../services/model/movie.models'
import { Series } from './series/series'
import "./series-list.scss";

const SeriesList = (props:{ movies: Movie[], genre: Genre | undefined  }) => {
    return (
        <section className="series-list">
            <h3>{props.genre ? props.genre.name : "Others"}</h3>
            <div className="series-list-images">
                {props.movies.map(item => <Series key={item.id} series={item}/> )}
            </div>
        </section>
    )
}


export default SeriesList
