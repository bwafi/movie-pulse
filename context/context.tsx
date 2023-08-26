"use client";
import { ReactNode, createContext, useContext, useState } from "react";

type GlobalContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleState: () => void;
};

export const GlobalContext = createContext<GlobalContextType>({
  isOpen: false,
  setIsOpen: () => {},
  handleState: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleState = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <GlobalContext.Provider value={{ isOpen, setIsOpen, handleState: handleState }}>{children}</GlobalContext.Provider>
  );
};
