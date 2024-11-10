import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('adminToken');
        navigate("/login-plantify-admin", { replace: true });
        window.location.reload();  // Ensures sidebar is hidden after logout
    }, [navigate]);
    

    return (
        <div className="flex items-center justify-center min-h-screen">
            <p>Logging out...</p>
        </div>
    );
}

export default Logout;
