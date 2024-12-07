import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpModal from "../popups/signup-modal";

export default function AuthCheck () {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return(
        <div className="flex flex-col items-center justify-center my-60">
            <h1 className="text-xl font-josefin-sans text-gray-100">Do you already have an account? If not please Signup first.</h1>
            <div className="flex justify-left mt-10">
                <button onClick={openModal} type="button" className="font-josefin-sans text-sm font-semibold text-white bg-gray-100 p-4 rounded hover:rounded-full border-2 border-gray-100 mr-4">No, I don't</button>
                <Link to='/login'><button type="button" className="font-josefin-sans text-sm font-semibold text-gray-100 p-4 rounded hover:rounded-full border-2 border-gray-100">Yes, I do</button></Link>
            </div>
            <SignUpModal showModal={showModal} closeModal={closeModal} />
        </div>
    );
}