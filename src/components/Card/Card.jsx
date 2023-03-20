import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ card }) => {
  return (
    <Link to={`/character/${card.id}`} key={card.id} className="item">
      <img src={card.image} alt="" />
      <div className="description">
        <h1>{card.name}</h1>
        <p>{card.species}</p>
      </div>
    </Link>
  );
};
