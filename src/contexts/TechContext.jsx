import { createContext, useState } from "react";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const [idLi, setIdLi] = useState("");

  return (
    <TechContext.Provider value={{ idLi, setIdLi }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
