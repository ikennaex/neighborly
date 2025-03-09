import axios from "axios"
import { useEffect, useState } from "react"
import { createContext } from "react"
import { baseUrl } from "./baseUrl"

export const UserContext = createContext({}) 

export function UserContextProvider({children}){
    const [user, setUser] = useState(null)
    useEffect(() => {
        if (!user) {
                axios.get(`${baseUrl}profile`).then((response) => {
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