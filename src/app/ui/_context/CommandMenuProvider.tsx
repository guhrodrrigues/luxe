"use client";

import { createContext, useContext, useState } from "react";

type CommandMenuProviderProps = {
  children: React.ReactNode;
};

type ContextProps = {
  showCommandMenu: boolean;
  setShowCommandMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialValues = {
  showCommandMenu: false,
  setShowCommandMenu: () => undefined,
};

const Context = createContext<ContextProps>(initialValues);

export function CommandMenuProvider({ children }: CommandMenuProviderProps) {
  const [showCommandMenu, setShowCommandMenu] = useState(false);

  const value = {
    showCommandMenu,
    setShowCommandMenu,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useProvider() {
  return useContext(Context);
}
