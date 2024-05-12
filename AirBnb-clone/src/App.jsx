import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Card from "./Card";
import data from "./data";

export default function App() {
  const cardElements = data.map((profile) => {
    return (
      <Card
        key={profile.id}
        profile={profile}
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-container">{cardElements}</section>
    </div>
  );
}
