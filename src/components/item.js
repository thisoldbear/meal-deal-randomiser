import React from "react";

export default ({ label, selection }) => (
  <div className="item">
    <h2 className="item__label">{label}</h2>
    <span className="item__emoji">{selection ? selection : "❓"}</span>
  </div>
);
