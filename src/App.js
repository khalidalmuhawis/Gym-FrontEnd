import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


// Components
import ClassList from "./ClassList";
import GymList from "./GymList";

const App = () => { 
  const [classes, setClasses] = useState([]);
  const [gyms, setGyms] = useState([]);
 
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    selectGym();
  }, []);


  useEffect(() => {
    getGyms();
  }, []);

  const [currentClass, setCurrentClass] = useState(null);

  const selectGym = async () => {
    try{
      const response = await axios.get("http://127.0.0.1:8000/classes/")
      console.log(response.data['classes'])
      setClasses(response.data['classes'])
      setLoading(false)
    } catch(error){
      console.log("error!")
      console.error(error)
    }
  };

  const getGyms = async () => {
    try{
      const response = await axios.get("http://127.0.0.1:8000/gyms/")
      console.log(response.data['gyms'])
      setGyms(response.data['gyms'])
      setLoading(false)
    } catch(error){
      console.log("error!")
      console.error(error)
    }
  };


  const unselectClass = () => setCurrentClass(null);

  const getContentView = () => {
      if (!loading){
        if (currentClass) {
          return <ClassList classes={currentClass} />;        
      } else {
          return( 
          <GymList gyms = {gyms} selectGym={selectGym}/>
          );
      }
    }
    return <h2>Loading...</h2>
  };

  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="content col-10">{getContentView()}</div>
      </div>
    </div>
  );
};

export default App;
