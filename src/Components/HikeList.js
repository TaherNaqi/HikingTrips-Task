import React from "react";
import { useState } from "react";
import Hike from "./Hike";
import SearchBar from "./SearchBar";
function HikeList({ hikingtrips }) {
  const [query, setQuery] = useState("");
  const [length, setlength] = useState("");
  const [diff, setdiff] = useState("all");
  //filtering multiple times using &&
  let trips = hikingtrips
    .filter(
      (trip) =>
        (trip.name.toLowerCase().includes(query.toLowerCase()) ||
          trip.city.toLowerCase().includes(query.toLowerCase())) &&
        trip.length > length &&
        (diff === "all" || diff === trip.difficulty)
    )
    .map((trip) => <Hike trip={trip} key={trip.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <p></p>
      <div>
        <output>Trip length {length} miles</output>
      </div>
      <input
        type="range"
        id="volume"
        name="volume"
        min="2"
        max="8"
        defaultValue="2"
        onChange={(event) => setlength(event.target.value)}
      />

      <p></p>
      <select
        name="Difficulty"
        id="Difficulty"
        onChange={(e) => setdiff(e.target.value)}
      >
        <option value="all">All</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <p></p>
      {trips}
    </div>
  );
}

export default HikeList;
