import React from "react";
import hikingtrips from "../Hikingtrips";
import { Navigate, useParams } from "react-router-dom";
import Hike from "./Hike";
function Detail() {
  const { slug } = useParams();
  let hike = hikingtrips.find((trip) => trip.slug === slug);
  if (!hike) {
    return <Navigate to="/404" />;
  }
  let recommended = hikingtrips
    .filter((trip) => trip.name !== hike.name && trip.city === hike.city)
    .map((trip) => <Hike trip={trip} key={trip.id} />);
  return (
    <div>
      <h5>{hike.name}</h5>
      <img className="img-detail" alt={hike.name} src={hike.image} />
      <p>City: {hike.city}</p>
      <p>Difficulty: {hike.difficulty}</p>
      <p>Length: {hike.length}</p>
      <p>Rating: {hike.rating}</p>
      <p style={{ color: "yellow" }}>Recommended Hikes</p>
      {recommended}
    </div>
  );
}

export default Detail;
