import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const DataContext = createContext();

function DataProvider(props) {
  const [projectData, setProjectData] = useState([]);
  const [actionData, setActionData] = useState([]);
  const dataContext = {
    projectData,
    setProjectData,
    actionData,
    setActionData
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/projects`)
      .then(res => {
        setProjectData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [DataContext]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/actions`)
      .then(res => {
        setActionData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [DataContext]);

  const { children } = props;

  return (
    <DataContext.Provider value={dataContext}>{children}</DataContext.Provider>
  );
}

export default DataProvider;
