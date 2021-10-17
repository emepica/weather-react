import React from "react";
import "./UpdateInfo.css";

export default function UpdateInfo(props) {
  console.log(props.date);
  const weekdays =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let hours = props.date.getHours();
  if (hours<10) {
    hours =`0+${hours}`;  }
  let minutes = props.date.getMinutes();
  if (minutes<10) {
    minutes =`0+${minutes}`;  }
  let day =weekdays[props.date.getDay()];


  return (
    <div className="UpdateInfo">
      <span>
        Last updated: {day} {hours}:{minutes}
        <br />
        Current timezone : Europe/Brussels
      </span>
    </div>
  );
}
