import React from "react";
import { useNavigate } from "react-router-dom";
import {
    FaArrowLeft, FaMapMarkerAlt, FaSearch, FaInfoCircle, FaCloudUploadAlt,
    FaShareAlt, FaComments, FaCog, FaUser, FaDownload
} from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion for animation

const DownloadedImagesPage = () => {
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
                    <FaCloudUploadAlt className="text-orange-500 text-xl cursor-pointer bg-orange-300 p-2 rounded-lg" onClick={() => navigate("/downloaded-images")} />
                    <FaShareAlt className="text-orange-500 text-xl cursor-pointer" />
                    <FaComments className="text-orange-500 text-xl cursor-pointer" />
                    <FaCog className="text-orange-500 text-xl cursor-pointer" />
                    <FaUser className="text-orange-500 text-xl cursor-pointer" onClick={() => navigate("/profile")} />
                </div>

                {/* Main Content with Sliding Animation */}
                <motion.div
                    className="flex-1 flex items-center justify-center p-6"
                    initial={{ x: "100%" }} // Start from the right
                    animate={{ x: 0 }} // Slide into view
                    exit={{ x: "100%" }} // Exit animation
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {/* White Content Box - Enlarged (Profile Page Style) */}
                    <div className="bg-white shadow-lg rounded-lg p-8 w-[90%] h-[80vh] relative flex flex-col">
                        {/* Back Button - Top Left */}
                        <button onClick={() => navigate("/profile")} className="absolute top-6 left-6 bg-gray-200 p-2 rounded-lg shadow-md">
                            <FaArrowLeft className="text-black text-lg font-semibold" />
                        </button>

                        {/* Download Icon & Text - Below Back Button */}
                        <div className="mt-16 ml-6 flex flex-col items-start">
                            <FaDownload className="text-orange-500 text-5xl mb-2" />
                            <h1 className="text-3xl font-bold">Download</h1>
                        </div>

                        {/* Downloaded Images Section */}
                        <div className="mt-10 ml-6 flex flex-wrap gap-4">
                            <img src="/images/wallpaper1.jpg" alt="Downloaded 1" className="w-32 h-32 object-cover rounded-lg shadow-md" />
                            <img src="/images/wallpaper2.jpg" alt="Downloaded 2" className="w-32 h-32 object-cover rounded-lg shadow-md" />
                            <img src="/images/wallpaper3.jpg" alt="Downloaded 3" className="w-32 h-32 object-cover rounded-lg shadow-md" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default DownloadedImagesPage;
