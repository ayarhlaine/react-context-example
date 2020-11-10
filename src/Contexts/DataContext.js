import React from "react";
const initialValue = [];
export const MyContext = React.createContext(initialValue);
const MyContextProvider = MyContext.Provider;
export default MyContextProvider;
