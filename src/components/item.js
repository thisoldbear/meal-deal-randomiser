import React from "react";

export default ({ label, item, id, hold, isHeld }) => (
  <div
    className={`item ${isHeld ? "item--isHeld" : ""}`}
    onClick={() => {
      if (item) {
        hold(id);
      }
    }}
  >
    <h2 className="item__label">{label}</h2>
    <span
      className={`item__icon ${item ? "item__icon--border" : ""} ${
        isHeld ? "item__icon--isHeld" : ""
      }`}
    >
      <span className="item__icon-emoji">{item ? item : "❓"}</span>
    </span>
  </div>
);
