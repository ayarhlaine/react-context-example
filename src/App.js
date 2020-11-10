import React from "react";
import MyContextProvider from "./Contexts/DataContext";
import ComponentOne from "./Components/ComponentOne";
import ComponentTwo from "./Components/ComponentTwo";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <h1>Hey Context!</h1>
      <MyContextProvider value={["Data 1", "Data 2"]}>
        <ComponentOne />
        <ComponentTwo />
      </MyContextProvider>
    </div>
  );
}
