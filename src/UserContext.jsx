import axios from "axios"
import { useEffect, useState } from "react"
import { createContext } from "react"
import { baseUrl } from "./baseUrl"
import Loader from "./Loader/Loader"

export const UserContext = createContext({}) 

export function UserContextProvider({children}){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true); // Optional: track loading state


    const refreshUser = async () => {
      setLoading(true); // Start loading while fetching user
      try {
        // Fetch user if token is in cookies
        const response = await axios.get(`${baseUrl}profile`, { withCredentials: true });
        setUser(response.data); // Set user data on success
      } catch (err) {
        console.log("Failed to fetch user:", err);
        setUser(null); // Clear user if error occurs (e.g., logged out or session expired)
      } finally {
        setLoading(false); // Stop loading when done
      }
    };

    useEffect(() => {
      refreshUser();
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