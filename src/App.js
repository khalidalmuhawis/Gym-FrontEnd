import React, { useState, useEffect } from "react";
import axios from "axios";


// Components
import ClassList from "./ClassList";

const App = () => { 
  const [classes, setClasses] = useState([]);
 
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getClasses();
  }, []);

  const getClasses = async () => {
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

  const getContentView = () => {
      if (loading){
        return <h2>Loading...</h2>
      } else {
          return <ClassList classes = {classes} />;
      }
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
