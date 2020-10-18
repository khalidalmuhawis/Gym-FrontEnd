import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import NewGymModal from "./NewGymModal"

const GymCard = props => {
  const gym = props.gym;
  const gymName = `${gym.name}`;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card" onClick={() => props.selectGym(gym)}>
      <div className="image">
          <img
            className="card-img-top img-fluid"
            src={gym.image.url}
            alt={gymName}
          />
        </div>
        
        <div className="card-body">
          <h5 className="card-title">
            <span>{gymName}</span>
          </h5>
          <small className="card-text">{gym.openningtime} - {gym.closingtime}</small>
          <Link to={"/classes/"} className="btn btn-info m-2 float-left">
        Classes
      </Link>
        </div>
      </div>
    </div>
  );
};

export default GymCard;
