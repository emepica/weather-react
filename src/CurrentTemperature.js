import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature() {
  return (
    <div className="CurrentTemperature">
      <img src="../img/021-sun.svg" alt="sun" id="current-icon" width="100px" />
      <span className="current temperature right">
        <span className="current-temperature">20</span>
        <span className="units right">°C</span>
      </span>
    </div>
  );
}
