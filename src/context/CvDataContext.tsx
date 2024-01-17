import { createContext, useContext, ReactNode, useState } from "react";

interface CvDataContextProps {
  cvData: any;
  setCvData: React.Dispatch<React.SetStateAction<any>>;
}

const CvDataContext = createContext<CvDataContextProps | undefined>(undefined);

export const CvDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cvData, setCvData] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    return storedUser;
  });

  const contextValue = {
    cvData,
    setCvData,
  };

  return <CvDataContext.Provider value={contextValue}>{children}</CvDataContext.Provider>;
};

export const useCvData = () => {
  const context = useContext(CvDataContext);
  if (!context) {
    throw new Error("useCvData must be used within a CvDataProvider");
  }
  return context;
};
