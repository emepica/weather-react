import React from "react";

export default function FormattedDate(props){
  
  let time = props.date.getTime();
  let timeOffset = props.date.getTimezoneOffset()*60000;
  let cityDate =new Date(time+timeOffset+(props.timezone*1000));

    //const months=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    let hours = cityDate.getHours();
    if (hours<10) {
      hours =`0${hours}`;  }
    let minutes = cityDate.getMinutes();
    if (minutes<10) {
      minutes =`0${minutes}`;  }
    //let date =cityDate.getDate();
    //let month =months[cityDate.getMonth()];
    //let year= cityDate.getUTCFullYear();
    

    return (
      <div className="FormattedDate">
      It's {hours}:{minutes}
      </div>
    );
  }