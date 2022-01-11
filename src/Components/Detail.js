import React from "react";
import hikingtrips from "../Hikingtrips";
import { Navigate, useParams } from "react-router-dom";
function Detail() {
  const { slug } = useParams();
  let hike = hikingtrips.find((trip) => trip.slug === slug);
  if (!hike) {
    return <Navigate to="/404" />;
  }
  return (
    <div>
      <h5>{hike.name}</h5>
      <img className="img" src={hike.image} />
      <p>City: {hike.city}</p>
      <p>Difficulty: {hike.difficulty}</p>
      <p>Length: {hike.length}</p>
      <p>Rating: {hike.rating}</p>
    </div>
  );
}

export default Detail;
