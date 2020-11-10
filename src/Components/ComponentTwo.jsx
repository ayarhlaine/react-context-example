import React, { useContext } from "react";
import { MyContext } from "../Contexts/DataContext";
export const ComponentTwo = () => {
  const data = useContext(MyContext);
  return (
    <div>
      <h3>Component Two</h3>
      {JSON.stringify(data)}
    </div>
  );
};
export default ComponentTwo;
