import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({ movies }) => {
    return (
        <div>
           <Link to="/add"> <Button variant="primary" >
                Add Movie
            </Button></Link>
            {movies.map(el => <MovieCard el={el} key={el.id} />)}
        </div>
    )
}

export default MovieList
