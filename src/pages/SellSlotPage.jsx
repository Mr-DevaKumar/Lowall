import React, { useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    FaMapMarkerAlt, FaSearch, FaInfoCircle, FaCloudUploadAlt,
    FaShareAlt, FaComments, FaCog, FaUser, FaChevronDown, FaChevronUp
} from "react-icons/fa";

const SellSlotPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedTime = location.state?.time || "No slot selected"; // Get booked time
    const uploadedImage = location.state?.image || null; // Get uploaded image
    const [showDropdown, setShowDropdown] = useState(false);
    const [price, setPrice] = useState("");
    const handleCancel = useCallback(() => navigate("/slot-confirmation"), [navigate]);

    return (
        <div className="flex flex-col h-screen">
            {/* Top Container */}
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

                    {/* Image Preview */}
                    <div className="w-96 bg-white rounded-lg shadow-lg p-6">
                        {uploadedImage ? (
                            <img src={uploadedImage} alt="Uploaded" className="w-full h-96 object-cover rounded-lg" />
                        ) : (
                            <div className="w-full h-96 flex items-center justify-center border-2 border-gray-300 rounded-lg">
                                <span className="text-gray-500">No image available</span>
                            </div>
                        )}
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

                    {/* Sell Slot Dropdown */}
                    <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                        <div
                            className="flex justify-between items-center"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            <span>You can sell the slot</span>
                            {showDropdown ? <FaChevronUp /> : <FaChevronDown />}
                        </div>

                        {showDropdown && (
                            <div className="mt-3">
                                <input
                                    type="number"
                                    placeholder="Enter price"
                                    className="w-full p-2 border rounded-md mt-2"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                        )}
                    </div>

                    {/* Sell Button */}
                    <button
                        className="bg-red-500 text-white py-3 rounded-lg shadow-md"
                        onClick={() => alert(`Slot sold for ₹${price || "0"}`)}
                    >
                        Sell
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SellSlotPage;
