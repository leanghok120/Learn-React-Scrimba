import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Card from "./Card";
import data from "./data";

/*
Challenge:

- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
  const cardElements = data.map((profile) => {
    return (
      <Card
        img={profile.coverImg}
        rating={profile.stats.rating}
        reviewCount={profile.stats.reviewCount}
        location={profile.location}
        title={profile.title}
        price={profile.price}
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      {cardElements}
    </div>
  );
}
