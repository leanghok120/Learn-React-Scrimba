import React from "react";

export default function Hero() {
  return (
    <main className="hero">
      <div className="grid-container">
        <img
          src="public/assets/photo-grid.png"
          alt="photo-grid"
          className="air-grid"
        />
      </div>
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </main>
  );
}
