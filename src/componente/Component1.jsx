import { useState, createContext } from "react";
export const UserContext = createContext("Boas a todos");

export default function Component1({children}) {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      {children}       
    </UserContext.Provider>
  );
}





