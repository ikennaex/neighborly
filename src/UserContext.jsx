import axios from "axios"
import { useEffect, useState } from "react"
import { createContext } from "react"
import { baseUrl } from "./baseUrl"
import Loader from "./Loader/Loader"

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
        })
        .catch((err) => {
          console.log(err);
          setUser(null)
        }) .finally(() => {
          setLoading(false); 
        })
    }, []); // Empty dependency array for useEffct to run on mount
  
    if (loading) {
      return (
      <div className="flex justify-center items-center h-lvh">
         <Loader/> {/* // to render loading state while fetching user */}
      </div>
      )
    }
    return (
        <UserContext.Provider value= {{user, setUser}} >
        {children}
        </UserContext.Provider>
    )
}