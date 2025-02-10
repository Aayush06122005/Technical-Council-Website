import React from "react";
import "./index.css"; 

const Card = (props) => {
  return (
    <div className="event-card">
      <div className="event-content">
        <h1 className="event-title">{props.title}</h1>
        <p className="event-date">{props.date}</p>
        <p className="event-description">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
