import React from "react";

export default function Login () {
    return(
        <div className="min-h-screen bg-navygreen-100 dark:bg-forest-200 flex items-center dark:text-white dark:text-opacity-60 justify-center">
            <div className="dark:bg-forest-100 rounded-pl p-8 max-h-fit">
                <h1>Admin Login</h1>
                <form>
                    <label>username</label>
                    <input
                        placeholder="enter username"
                    />
                </form>
            </div>
        </div>
    );
}