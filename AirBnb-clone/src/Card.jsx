import React from "react";

export default function Card(props) {
  let badgeText
  let data = props.profile

  if (data.openSpots === 0) {
    badgeText = "Sold out"
  } else if (data.location === "Online") {
    badgeText = "Online"
  }
  return (
    <div className="card">
      {badgeText && <p className="card-badge">{badgeText}</p>}

      <div className="img-container">
        <img src={`public/assets/${data.coverImg}`} alt="card-img" className="card-img" />
      </div>
      <div className="about-card">
        <div className="stars">
          <img src="public/assets/star.png" alt="star-img" className="star-img" />
          <p className="star-rating">
            <span>{data.stats.rating}</span> ({data.stats.reviewCount}) • {data.location}
          </p>
        </div>
        <div className="desc">
          <p>{data.title}</p>
        </div>
        <div className="cost">
          <p>
            <span>From ${data.price}</span> / person
          </p>
        </div>
      </div>
    </div>
  );
}
