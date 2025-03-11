import { useContext } from "react"
import { UserContext } from "./UserContext"
import { Navigate, Outlet } from "react-router-dom"

const protectedRoutes = ({children}) => {
    const {user} = useContext(UserContext)

    // if user is not logged in  
        return user ? <Outlet /> : <Navigate to = "/login" />


    // if user is logged in 

    return children
}

export default protectedRoutes