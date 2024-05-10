import React from "react";

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
  return (
    <div className="card">
      <div className="img-container">
        <img
          src="src/assets/katie-zaferes.png"
          alt="card-img"
          className="card-img"
        />
      </div>
      <div className="about-card">
        <div className="stars">
          <img
            src="src/assets/star.png"
            alt="star-img"
            className="star-img"
          />
          <p className="star-rating"><span>5.0</span> (6) . USA</p>
        </div>
        <div className="desc">
          <p>Life lessons with Katie Zaferes</p>
        </div>
        <div className="cost">
          <p><span>From $136</span> / person</p>
        </div>
      </div>
    </div>
  );
}
