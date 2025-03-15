import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const { user, loading } = useContext(UserContext);

    if (loading) {
        // Optionally show a loader while checking auth
        return <div>Loading...</div>;
    }

    // Redirect to login if user is not authenticated
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;