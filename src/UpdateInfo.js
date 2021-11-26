import React from "react";
import "./UpdateInfo.css";

export default function UpdateInfo(props) {
  const weekdays =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
  let hours = props.date.getHours();
  if (hours<10) {
    hours =`0${hours}`;  }
  let minutes = props.date.getMinutes();
  if (minutes<10) {
    minutes =`0${minutes}`;  }
  let day =weekdays[props.date.getDay()];
  let date =props.date.getDate();
  let month =months[props.date.getMonth()];
  let year =props.date.getUTCFullYear();
  //let timeOffset = props.date.getTimeOffset()/60;
  //let adjustedDate= props.date.getDate()-props.date.getTimeOffset();


  return (
    <div className="UpdateInfo">
      <span>
        Last updated: {day}, {month} {date} {year}, {hours}:{minutes}
        <br />
        Current timezone : Europe/Brussels
      </span>
    </div>
  );
}
