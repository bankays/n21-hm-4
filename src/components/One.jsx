import React from "react";
import "./One.css";
const One = ({ firstName, lastName, email, img }) => {
  return (
    <div className="obj">
      <div className="container">
        <div className="di">
          <p>{firstName}</p>
          <p>{lastName}</p>
          <p>{email}</p>
          <img src={img} alt="" />
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default One;
