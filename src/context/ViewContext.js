import React, { createContext, useState } from "react";

const ViewModeContext = createContext();

const ViewModeProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState("card");

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "card" ? "table" : "card"));
  };

  return (
    <ViewModeContext.Provider value={{ viewMode, toggleViewMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};

export { ViewModeContext, ViewModeProvider };
