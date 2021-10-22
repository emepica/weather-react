import React from "react";

export function FormattedDate(props){
  //let now = new Date(props.date);
  //let time = now.getTime();
  //let timeOffset = props.date.getTimezoneOffset()*60000;

    const weekdays =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let hours = props.date.getHours();
    if (hours<10) {
      hours =`0${hours}`;  }
    let minutes = props.date.getMinutes();
    if (minutes<10) {
      minutes =`0${minutes}`;  }
    let day =weekdays[props.date.getDay()];
  
  
    return (
      <div className="FormattedDate">
{day} {hours}:{minutes}
      </div>
    );
  }