import { createContext, useReducer } from "react";
import React from "react";
import { userReducer, initialState } from "./reducers/userReducer";

// create Context
export const UserContext = createContext({} as {user:{user: string, isLogIn:boolean}, userDispatch:React.Dispatch<{
  type: string;
  payload: string;
}>})

// Context Provider to wrap children
function UserProvider({children}:{children:React.ReactNode}) {
  //  useReducer
  const [user, userDispatch] = useReducer(userReducer, initialState)
  return ( 
    <UserContext.Provider value={{user, userDispatch}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;