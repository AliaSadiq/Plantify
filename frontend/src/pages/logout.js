import {React, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear local storage
        localStorage.removeItem('user');
        // Redirect to login screen
        navigate("/login");
        // Reload the window to ensure the changes take effect immediately
        window.location.reload();
    }, []);

    return(
        <div className="flex items-center justify-center">
            <p>Logging out...</p>
        </div>
    );
}

export default Logout;