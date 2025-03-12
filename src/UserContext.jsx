import axios from "axios"
import { useEffect, useState } from "react"
import { createContext } from "react"
import { baseUrl } from "./baseUrl"

export const UserContext = createContext({}) 

export function UserContextProvider({children}){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true); // Optional: track loading state

    useEffect(() => {
      // Fetch user if token is in cookies
      axios
        .get(`${baseUrl}profile`)
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }, []); // Empty dependency array for useEffct to run on mount
  
    if (loading) {
      return <div>fetching user</div>; // to render loading state while fetching user
    }
    return (
        <UserContext.Provider value= {{user, setUser}} >
        {children}
        </UserContext.Provider>
    )
}