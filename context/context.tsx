"use client";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

type GlobalContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  searchOpen: boolean;
  setSearcOpen: Dispatch<SetStateAction<boolean>>;
  handleSearchState: () => void;
  handleMenuState: () => void;
};

export const GlobalContext = createContext<GlobalContextType>({
  isOpen: false,
  setIsOpen: () => {},
  searchOpen: false,
  setSearcOpen: () => {},
  handleSearchState: () => {},
  handleMenuState: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchOpen, setSearcOpen] = useState<boolean>(false);

  const handleMenuState = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSearchState = () => {
    setSearcOpen((prev) => !prev);
  };

  const value = {
    isOpen,
    setIsOpen,
    searchOpen,
    setSearcOpen,
    handleSearchState,
    handleMenuState,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
