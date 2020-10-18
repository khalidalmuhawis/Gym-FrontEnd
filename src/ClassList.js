import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import ClassCard from "./ClassCard";

const ClassList = props => {
    const classCards = props.classes.map(classs => (
      <ClassCard
        key={classs.id}
        classs={classs}
        selectClass={props.selectClass}
      />
    ));
  
    return (
      <div className="authors">
        <h3>Classes</h3>
        <div className="row">{classCards}</div>
        
      </div>
    );
  };
  
  export default ClassList;