import React from "react";
import { Link } from "react-router-dom";

function Hike({ t }) {
  return (
    <div className="productWrapper">
      <p>{t.name}</p>
      <Link to={`/${t.slug}`}>
        <img className="img" alt={t.name} src={t.image} />
      </Link>
    </div>
  );
}

export default Hike;
