import React, { useState } from "react";

const initialData = {
  nombre: "Jose",
  apellido: "Rivera",
};

const DataContext = React.createContext();

function DataContextProvider(props) {
  const [data, setData] = useState(initialData);
  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
