import React from "react";
import { Link } from "react-router-dom";

function Hike({ trip }) {
  return (
    <div className="productWrapper">
      <p>{trip.name}</p>
      <Link to={`/${trip.slug}`}>
        <img className="img-link" alt={trip.name} src={trip.image} />
      </Link>
    </div>
  );
}

export default Hike;
