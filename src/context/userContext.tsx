/* import React from "react";
import { useUserData } from "../hook/useUserData";

export interface IUserContextData {
    iconImg?: string;
    name?: string;
  }

export const userContext= React.createContext<IUserContextData>({});

export function UserContextProvider({children} : {children: React.ReactNode}){
  const [data] =useUserData();

  return (
  <userContext.Provider value={data}>
    {children}
  </userContext.Provider>
)
} */