import React from 'react'
import "./movieCard.css"
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';

const MovieCard = ({ el }) => {
    return (
        <div class="wrapper">
            <div>
                <div className="main_card">
                    <div className="card_left">
                        <div className="card_datails">
                            <h1>{el.title}</h1>
                            <div className="card_cat">
                                <p className="PG">PG - 13</p>
                                <p className="year">2018</p>
                                <p className="genre">Action | Adventure </p>
                                <p className="time">2h 28m</p>
                            </div>
                            <p className="disc">{el.description}</p>
                            <a href="https://www.imdb.com/title/tt4912910/" target="_blank">Read More</a>
                            <div className="social-btn">
                                {/* WATCH TRAILER*/}
                               <Link to={`/movieDetails/${el.id}`} ><button>
                                    <i className="fas fa-play" /> SEE TRAILER
                                </button></Link> 
                                {/* GET*/}
                                <StarRatingComponent name={"rate"} starCount={6} editing={false} value={el.rating} />
                                {/*USERS RATINGS*/}
                                <button>
                                    <i className="fas fa-thumbs-up" /> 97%
                                </button>
                                {/*BOOKMARK*/}
                                <button>
                                    <i className="fas fa-star" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card_right">
                        <div className="img_container">
                            <img src={el.posterUrl} alt={el.title} />
                        </div>
                        <div className="play_btn">
                            <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
                                <i className="fas fa-play-circle" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
