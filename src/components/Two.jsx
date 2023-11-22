import React from "react";
import "./One.css";
const One = ({ name, description }) => {
  return (
    <div className="obj1">
      <div className="container">
        <p>{name}</p>
        <p>{description}</p>{" "}
      </div>{" "}
    </div>
  );
};

export default One;
