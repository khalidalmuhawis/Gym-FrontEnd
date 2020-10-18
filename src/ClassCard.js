import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ClassCard = props => {
  const classs = props.classs;
  const className = `${classs.title}`;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card" onClick={() => props.selectClass(classs)}>
        <div className="card-body">
          <h5 className="card-title">
            <span>{className}</span>
          </h5>
          <small className="card-text">{classs.datetime}</small>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
