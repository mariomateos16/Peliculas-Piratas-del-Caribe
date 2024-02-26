import React from 'react';
import "./Card.css"
import { Link } from 'react-router-dom';

function Card({ image, titulo }) {
    return (
    <Link to={`/${titulo}`} className="Card-link">
        <div className="Card">
          <img className="card-img" src={image} alt={titulo} />
        </div>
    </Link>
    );
}

export default Card;