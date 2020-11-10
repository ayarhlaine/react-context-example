import React, { useContext } from "react";
import { MyContext } from "../Contexts/DataContext";
export const ComponentOne = () => {
  const data = useContext(MyContext);
  return (
    <div>
      <h3>Component One</h3>
      {JSON.stringify(data)}
    </div>
  );
};
export default ComponentOne;
