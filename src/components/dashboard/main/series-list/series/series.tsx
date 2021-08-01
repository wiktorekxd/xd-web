import React from 'react'
import { Movie } from '../../../../../services/model/movie.models'
import "./series.scss";

export const Series = (props: {series: Movie}) => {
    return (
        <div className="series-headline" >
            <img src={props.series.imageBase64} alt="series"  />
        </div>
    )
}


