import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaSearch, FaMapMarkerAlt, FaInfoCircle, FaCloudUploadAlt, FaShareAlt,
    FaDownload, FaComments, FaCog, FaUser
} from "react-icons/fa";

const uploadedImages = [
    "/images/wallpaper1.jpg",
    "/images/wallpaper2.jpg",
    "/images/wallpaper3.jpg",
    "/images/wallpaper4.jpg",
];

const favoriteImages = [
    "/images/wallpaper1.jpg",
    "/images/wallpaper2.jpg",
];

const Profile = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Downloads");

    return (
        <div className="flex flex-col h-screen bg-gradient-to-b from-orange-100 to-white">
            {/* Top Container */}
            <div className="flex justify-between items-center p-4 rounded-b-lg bg-white shadow-md mx-4 mt-4">
                <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-orange-500" />
                    <span className="text-lg font-semibold">India</span>
                </div>
                <div className="flex items-center space-x-2 border-b-2 border-gray-300 px-3 py-1">
                    <FaSearch className="text-gray-500" />
                    <input type="text" placeholder="Search" className="outline-none bg-transparent w-40" />
                </div>
            </div>

            <div className="flex flex-1">
                {/* Left Sidebar */}
                <div className="w-16 flex flex-col items-center space-y-6 py-6">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src="/images/logo.png" alt="Logo" className="w-full h-full object-cover" onClick={() => navigate("/dashboard")} />
                    </div>
                    <FaInfoCircle className="text-orange-500 text-xl cursor-pointer" onClick={() => navigate("/about")} />
                    <FaDownload className="text-orange-500 text-xl cursor-pointer" onClick={() => navigate("/download")} />
                    <FaShareAlt className="text-orange-500 text-xl cursor-pointer" />
                    <FaComments className="text-orange-500 text-xl cursor-pointer" />
                    <FaCog className="text-orange-500 text-xl cursor-pointer" />
                    <FaUser className="text-orange-500 text-xl cursor-pointer bg-orange-300 p-2 rounded-lg" onClick={() => navigate("/profile")} />
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col items-center p-4">
                    {/* Profile Section */}
                    <div className="flex w-3/4 space-x-4 p-4 bg-white shadow-lg rounded-lg">
                        <img src="/images/profile.jpg" alt="Profile" className="w-20 h-20 object-cover rounded-lg" />
                        <div className="flex flex-col justify-center bg-blue-100 p-4 rounded-lg w-full">
                            <p className="text-lg font-semibold">User</p>
                            <p className="text-gray-600">Id: 866***65</p>
                        </div>
                        <div className="flex flex-col justify-center bg-gray-100 p-4 rounded-lg w-full">
                            <p className="font-semibold flex items-center">
                                <FaShareAlt className="text-orange-500 text-xl cursor-pointer" onClick={() => navigate("/sharing")} />
                            </p>
                            <p className="text-gray-600 text-sm">Share services with family members</p>
                        </div>
                    </div>

                    {/* Tabs Section */}
                    <div className="relative w-3/4 mt-4">
                        <div className="flex justify-between border-b border-gray-300">
                            {["Downloads", "Draft", "Favorites"].map((tab) => (
                                <button
                                    key={tab}
                                    className={`text-lg p-3 transition-all duration-500 ${activeTab === tab ? "border-b-2 border-black font-semibold" : "text-gray-500"
                                        }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Sliding Content */}
                        <div className="overflow-hidden w-full mt-4">
                            <div
                                className="flex transition-transform duration-500"
                                style={{
                                    transform: `translateX(${activeTab === "Downloads" ? "0%" : activeTab === "Draft" ? "-100%" : "-200%"})`
                                }}
                            >
                                {/* Downloads Tab */}
                                <div className="w-full flex-shrink-0 grid grid-cols-2 gap-4">
                                    {uploadedImages.map((img, index) => (
                                        <img key={index} src={img} alt={`upload-${index}`} className="w-full h-40 object-cover rounded-lg" />
                                    ))}
                                </div>

                                {/* Draft Tab */}
                                <div className="w-full flex-shrink-0 flex justify-center items-center text-gray-500 text-lg font-semibold">
                                    No Draft
                                </div>

                                {/* Favorites Tab */}
                                <div className="w-full flex-shrink-0 grid grid-cols-2 gap-4">
                                    {favoriteImages.map((img, index) => (
                                        <img key={index} src={img} alt={`favorite-${index}`} className="w-full h-40 object-cover rounded-lg" />
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
