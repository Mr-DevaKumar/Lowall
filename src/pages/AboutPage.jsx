import React from "react";
import { useNavigate } from "react-router-dom";
import {
    FaArrowLeft, FaMapMarkerAlt, FaSearch, FaInfoCircle, FaCloudUploadAlt,
    FaShareAlt, FaComments, FaCog, FaUser
} from "react-icons/fa";

const AboutPage = () => {
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
                    <FaInfoCircle className="text-orange-500 text-xl cursor-pointer bg-orange-300 p-2 rounded-lg" onClick={() => navigate("/about")} />
                    <FaCloudUploadAlt className="text-orange-500 text-xl cursor-pointer" onClick={() => navigate("/download")} />
                    <FaShareAlt className="text-orange-500 text-xl cursor-pointer" />
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
                    <div className="bg-white shadow-lg rounded-lg p-8 w-[85%] h-[70vh] relative">
                        {/* Back Button - Top Left */}
                        <button onClick={() => navigate("/profile")} className="absolute top-6 left-6 bg-gray-200 p-2 rounded-lg shadow-md">
                            <FaArrowLeft className="text-black text-lg font-semibold" />
                        </button>

                        {/* About Icon & Text - Below Back Button */}
                        <div className="absolute top-20 left-6 flex flex-col items-start">
                            <FaInfoCircle className="text-orange-500 text-5xl mb-2" />
                            <h1 className="text-3xl font-bold">About</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
