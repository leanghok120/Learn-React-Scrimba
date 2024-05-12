import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={`public/assets/${props.img}`} alt="card-img" className="card-img" />
      </div>
      <div className="about-card">
        <div className="stars">
          <img src="public/assets/star.png" alt="star-img" className="star-img" />
          <p className="star-rating">
            <span>{props.rating}</span> ({props.reviewCount}) • {props.location}
          </p>
        </div>
        <div className="desc">
          <p>{props.title}</p>
        </div>
        <div className="cost">
          <p>
            <span>From {props.price}</span> / person
          </p>
        </div>
      </div>
    </div>
  );
}