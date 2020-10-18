import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import GymCard from "./GymCard";

const GymList = props => {
    const gymCards = props.gyms.map(gym => (
      <GymCard
        key={gym.id}
        gym={gym}
        selectGym={props.selectGym}
      />
    ));
  
    return (
      <div className="gyms">
        <h3>Gyms</h3>
        <div className="row">{gymCards}</div>
      </div>
    );
  };
  
  export default GymList;