import React from "react";
import { Card } from "react-bootstrap";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movies = ({ title, poster_path, overview, vote_average, release_date }) => {
  return (
    <div>
      <Card style={{ width: "14rem", margin: "20px 12px" }}>
        <Card.Img variant="top" src={IMG_API + poster_path} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{fontSize: "14px"}}>{overview.slice(0, 250)}</Card.Text>
          <Card.Text className="imdb">IMDB Rating : <span id="rating">{vote_average}</span></Card.Text>
          <Card.Text className="release">Release Date : <span id="date">{release_date}</span></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Movies;
