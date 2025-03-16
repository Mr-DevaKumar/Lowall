import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    FaCalendarAlt, FaThumbsUp, FaComment, FaEye, FaSearch,
    FaInfoCircle, FaCloudUploadAlt, FaShareAlt, FaComments, FaCog, FaUser, FaMapMarkerAlt
} from "react-icons/fa";

const SlotConfirmationPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedTime = location.state?.time || "No slot selected"; // Ensure safe access

    // Navigation Handlers
    const handleCancel = useCallback(() => navigate("/upload-image"), [navigate]);
    const handleProfileClick = useCallback(() => navigate("/profile"), [navigate]);
    const handleContinue = useCallback(() => navigate("/dashboard"), [navigate]);

    return (
        <div className="flex flex-col h-screen">
            {/* Top Container */}
            <div className="flex justify-between items-center p-4 border-b border-gray-300">
                <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-orange-500" aria-label="Location" />
                    <span className="text-lg font-semibold">India</span>
                </div>
                <div className="flex items-center space-x-2 border-b-2 border-gray-300 px-2">
                    <FaSearch className="text-gray-500" aria-label="Search" />
                    <input type="text" placeholder="Search" className="outline-none" />
                </div>
            </div>

            <div className="flex flex-1">
                {/* Right Sidebar */}
                <div className="w-16 bg-white shadow-lg flex flex-col items-center py-6 space-y-6">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src="/images/logo.png" alt="Logo" className="w-full h-full object-cover" onClick={() => navigate("/dashboard")} />
                    </div>
                    <FaInfoCircle className="text-orange-500 text-xl cursor-pointer" onClick={() => navigate("/about")} />
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
                <div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 p-4 relative">
                    {/* Cancel Button */}
                    <button
                        className="absolute top-5 left-5 text-gray-700 text-lg"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>

                    {/* Image Placeholder */}
                    <div className="w-96 bg-white rounded-lg shadow-lg p-6">
                        <div className="w-full h-96 flex items-center justify-center border-2 border-gray-300 rounded-lg">
                            <span className="text-gray-500">Slot Confirmed</span>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-2/5 p-4 flex flex-col space-y-4">
                    {/* Slot Booked */}
                    <div className="bg-white p-4 rounded-lg shadow-md text-center text-lg font-semibold">
                        Slot Booked
                    </div>

                    {/* Selected Time Slot */}
                    <div className="bg-white p-4 rounded-lg shadow-md text-center text-lg">
                        {selectedTime}
                    </div>

                    {/* Comment Box */}
                    <textarea
                        className="w-full p-3 border rounded-md shadow-md"
                        placeholder="Add a comment..."
                        rows="3"
                    ></textarea>

                    {/* Buttons */}
                    <div className="flex space-x-4">
                        <button
                            className="flex-1 bg-red-500 text-white py-3 rounded-lg shadow-md"
                            onClick={() => navigate("/sell-slot", { state: { time: selectedTime, image: location.state?.image } })}
                        >
                            Sell
                        </button>
                        <button
                            className="flex-1 bg-orange-500 text-white py-3 rounded-lg shadow-md"
                            onClick={handleContinue}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlotConfirmationPage;
