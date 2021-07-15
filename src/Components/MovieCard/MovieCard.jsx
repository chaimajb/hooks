import React from 'react'
import { Card, Button } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import "./MovieCard.css"

function MovieCard ({movie}){
    return(
        <div className="Card-Container">
        <Card style={{width: "18rem", height:" 53 rem"}}>
            <Card.Img className="img-container" variant="top" src={movie.posterURL} height="60%" />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text className="description-container">
                    {movie.description}
                </Card.Text>
                {/* <h2>{"⭐".repeat(movie.rating)}</h2> */}
                <ReactStars
                    count={5}
                    value={movie.rating}
                    isHal={true}
                    size={35}
                    activeColor="#ffd700"
                    edit={false}
                />,
            </Card.Body>
            <Card.Footer className="cardFooter">
                <Button variant="primary">Download</Button>
            </Card.Footer>
        </Card>
        </div>
    );
}

export default MovieCard 