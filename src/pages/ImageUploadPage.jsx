import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaCalendarAlt, FaThumbsUp, FaComment, FaEye, FaSearch,
    FaInfoCircle, FaCloudUploadAlt, FaShareAlt, FaComments, FaCog, FaUser, FaMapMarkerAlt
} from "react-icons/fa";
import SlotBookingOverlay from "./SlotBookingOverlay";

const ImageUploadPage = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [showOverlay, setShowOverlay] = useState(false);

    // Dropdown states
    const [showLikes, setShowLikes] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [showViews, setShowViews] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

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
                        onClick={() => navigate("/dashboard")}
                    >
                        Cancel
                    </button>

                    {/* Image Preview */}
                    <div className="w-96 bg-white rounded-lg shadow-lg p-6">
                        {image ? (
                            <img src={image} alt="Uploaded" className="w-full h-96 object-cover rounded-lg" />
                        ) : (
                            <div className="w-full h-96 flex items-center justify-center border-2 border-gray-300 rounded-lg">
                                <span className="text-gray-500">No image uploaded</span>
                            </div>
                        )}
                    </div>

                    {/* Image Upload Input */}
                    <input
                        type="file"
                        accept="image/*"
                        className="mt-8"
                        onChange={handleFileChange}
                    />
                </div>

                {/* Right Section */}
                <div className="w-2/5 p-4 flex flex-col space-y-4">
                    {/* Slot Booking Button */}
                    <div
                        className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center cursor-pointer"
                        onClick={() => setShowOverlay(true)}
                    >
                        <div className="flex items-center space-x-2">
                            <FaCalendarAlt />
                            <span>Slot booking</span>
                        </div>
                        <span>➝</span>
                    </div>

                    {/* Likes Section */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowLikes(!showLikes)}>
                            <div className="flex items-center space-x-2">
                                <FaThumbsUp />
                                <span>Likes</span>
                            </div>
                            <span>{showLikes ? "▲" : "➝"}</span>
                        </div>
                        {showLikes && (
                            <div className="mt-2 p-2 bg-gray-100 rounded-md">
                                <p className="text-sm">👍 1024 people liked this post</p>
                            </div>
                        )}
                    </div>

                    {/* Comments Section */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowComments(!showComments)}>
                            <div className="flex items-center space-x-2">
                                <FaComment />
                                <span>Comments</span>
                            </div>
                            <span>{showComments ? "▲" : "➝"}</span>
                        </div>
                        {showComments && (
                            <div className="mt-2 p-2 bg-gray-100 rounded-md">
                                <p className="text-sm">💬 "Awesome upload! Keep going!"</p>
                                <p className="text-sm">💬 "Nice shot, I love it!"</p>
                            </div>
                        )}
                    </div>

                    {/* Views Section */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowViews(!showViews)}>
                            <div className="flex items-center space-x-2">
                                <FaEye />
                                <span>Views</span>
                            </div>
                            <span>{showViews ? "▲" : "➝"}</span>
                        </div>
                        {showViews && (
                            <div className="mt-2 p-2 bg-gray-100 rounded-md">
                                <p className="text-sm">👀 2048 people viewed this post</p>
                            </div>
                        )}
                    </div>

                    {/* Continue Button (Opens SlotBookingOverlay) */}
                    <button
                        className={`w-full p-4 rounded-lg shadow-md text-white text-lg font-semibold transition ${image ? "bg-orange-500 cursor-pointer" : "bg-gray-400 cursor-not-allowed"
                            }`}
                        disabled={!image}
                        onClick={() => setShowOverlay(true)} // Opens the overlay
                    >
                        Continue
                    </button>
                </div>
            </div>

            {/* Slot Booking Overlay - Opens when "Continue" is clicked */}
            {showOverlay && (
                <SlotBookingOverlay
                    isOpen={showOverlay}
                    onClose={() => setShowOverlay(false)}
                    uploadedImage={image} // Passing uploaded image
                />
            )}
        </div>
    );
};

export default ImageUploadPage;
