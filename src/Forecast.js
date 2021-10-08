import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Forecast(){
    return(
        <div className="Forecast">
            Forecast under construction
            <Loader
        type="ThreeDots"
        color= "thistle"
        height={100}
        width={100}
      />
        </div>
    )
}