import React from "react";
import { useNavigate } from "react-router-dom";
import {
    FaArrowLeft, FaMapMarkerAlt, FaSearch, FaInfoCircle, FaDownload,
    FaShareAlt, FaComments, FaCog, FaUser, FaCloudUploadAlt
} from "react-icons/fa";

const SharingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen bg-gradient-to-r from-orange-100 to-white">
            {/* Top Bar */}
            <div className="flex justify-between items-center p-4 border-b border-gray-300">
                <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-orange-500" />
                    <span className="text-lg font-semibold">India</span>
                </div>
                <div className="flex items-center space-x-2 border-b-2 border-gray-300 px-2">
                    <FaSearch className="text-gray-500" />
                    <input type="text" placeholder="Search" className="outline-none" />
                </div>
            </div>

            <div className="flex flex-1">
                {/* Left Sidebar */}
                <div className="w-16 bg-white shadow-lg flex flex-col items-center py-6 space-y-6">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src="/images/logo.png" alt="Logo" className="w-full h-full object-cover" onClick={() => navigate("/dashboard")} />
                    </div>
                    <FaInfoCircle className="text-orange-500 text-xl cursor-pointer" onClick={() => navigate("/about")} />
                    <FaCloudUploadAlt className="text-orange-500 text-xl cursor-pointer" onClick={() => navigate("/download")} />
                    <FaShareAlt className="text-orange-500 text-xl cursor-pointer bg-orange-300 p-2 rounded-lg" />
                    <FaComments className="text-orange-500 text-xl cursor-pointer" />
                    <FaCog className="text-orange-500 text-xl cursor-pointer" />
                    <FaUser
                        className="text-orange-500 text-xl cursor-pointer"
                        onClick={() => navigate("/profile")}
                    />
                </div>

                {/* Main Content */}
                <div className="flex-1 flex items-center justify-center p-6">
                    {/* White Content Box - Enlarged */}
                    <div className="bg-white shadow-lg rounded-lg p-8 w-[85%] h-[70vh] relative flex flex-col">
                        {/* Back Button Inside Main Container (Top Left) */}
                        <button onClick={() => navigate("/profile")} className="absolute top-6 left-6 bg-gray-200 p-2 rounded-lg shadow-md">
                            <FaArrowLeft className="text-black text-lg font-semibold" />
                        </button>

                        <div className="flex h-full">
                            {/* Left Section - Text & Button */}
                            <div className="w-1/2 flex flex-col justify-center p-6">
                                <FaShareAlt className="text-orange-500 text-5xl mb-4" />
                                <h1 className="text-3xl font-bold">Sharing</h1>
                                <p className="text-gray-600 my-4 text-lg">
                                    Create a group by inviting friends to join.
                                </p>
                                <a href="#" className="text-blue-500 underline text-base">Learn more about sharing</a>

                                {/* Start Sharing Button Below Learn More */}
                                <button className="mt-4 bg-blue-200 px-8 py-3 rounded-lg text-black font-semibold text-lg">
                                    Start Sharing
                                </button>
                            </div>

                            {/* Right Section - Illustration */}
                            <div className="w-1/2 flex justify-center items-center">
                                <img src="/images/sharing.png" alt="Sharing" className="w-78 h-78" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SharingPage;
