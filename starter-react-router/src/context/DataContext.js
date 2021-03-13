import React, { useReducer } from "react";
import reducer from "./reducer";
import initialState from "./state";

export const DataContext = React.createContext();

const DataContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataContext.Provider value={[state, dispatch]}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
