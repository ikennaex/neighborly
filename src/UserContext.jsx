import axios from "axios"
import { useEffect, useState } from "react"
import { createContext } from "react"
import { baseUrl } from "./baseUrl"

export const UserContext = createContext({}) 

export function UserContextProvider({children}){
    const [user, setUser] = useState(null)
    useEffect(() => {
        if (!user) {
            console.log("fetching user details")
                axios.get(`${baseUrl}profile`).then((response) => {
                    console.log("user data received,", response.data)
                    setUser(response.data)
                }).catch ((err) => {
                    console.log(err)
                })
        }
    }, [])
    return (
        <UserContext.Provider value= {{user, setUser}} >
        {children}
        </UserContext.Provider>
    )
}