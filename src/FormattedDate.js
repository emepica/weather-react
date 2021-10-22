import React from "react";

export function FormattedDate(props){
  
  let time = props.date.getTime();
  let timeOffset = props.date.getTimezoneOffset()*60000;
  let cityDate =new Date(time+timeOffset+(props.timezone*1000)); 

    const weekdays =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let hours = cityDate.getHours();
    if (hours<10) {
      hours =`0${hours}`;  }
    let minutes = cityDate.getMinutes();
    if (minutes<10) {
      minutes =`0${minutes}`;  }
    let day =weekdays[cityDate.getDay()];
    
    

    return (
      <div className="FormattedDate">
{day} {hours}:{minutes}
      </div>
    );
  }