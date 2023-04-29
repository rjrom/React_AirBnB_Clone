import React from "react";
import star from "../images/star.png";

/*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
    */

export default function Card(props) {
  console.log(props);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  const imageUrl = new URL(`../images/${props.coverImg}`, import.meta.url).href;
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={imageUrl} alt="img" className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

/* 
  make image work dynamically:
  const imageUrl = new URL(`../images/${props.coverImg}`, import.meta.url).href

  parent = "card"
  badge = "card--badge"
  cardimg = "card--image"
  card stats = "card--stats"
  card--star
  gray text = "gray"
  bold text = "bold"
*/
