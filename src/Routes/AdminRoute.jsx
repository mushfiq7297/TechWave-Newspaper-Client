import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../components/sectionTitle/Loader";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loader></Loader>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;