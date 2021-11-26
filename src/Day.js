import React from "react";
import "./Day.css";

export default function Day(props){
  
  let time = props.date.getTime();
  let timeOffset = props.date.getTimezoneOffset()*60000;
  let cityDate =new Date(time+timeOffset+(props.timezone*1000));

    const weekdays =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    let day =weekdays[cityDate.getDay()];
    
    

    return (
      <div className="Day">
      Happy {day}!
      </div>
    );
  }