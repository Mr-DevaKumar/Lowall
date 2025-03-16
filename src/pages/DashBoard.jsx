import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaSearch, FaThumbsUp, FaThumbsDown, FaComment, FaEye,
    FaCamera, FaImage, FaUpload, FaArrowRight, FaMapMarkerAlt,
    FaInfoCircle, FaCloudUploadAlt, FaShareAlt, FaComments, FaCog, FaUser
} from "react-icons/fa";

const wallpapers = [
    "/images/wallpaper1.jpg",
    "/images/wallpaper2.jpg",
    "/images/wallpaper3.jpg",
    "/images/wallpaper4.jpg",
];

const initialComments = [
    ["Amazing view!", "Looks beautiful!"],
    ["This is stunning!", "Great colors!"],
    ["Awesome shot!", "I love this place!"],
    ["Fantastic click!", "Where is this?"]
];

const Dashboard = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [comments, setComments] = useState(initialComments);
    const [newComment, setNewComment] = useState("");
    const [showCamera, setShowCamera] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);

    const nextWallpaper = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % wallpapers.length);
    };

    const addComment = () => {
        if (newComment.trim() === "") return;
        const updatedComments = [...comments];
        updatedComments[currentIndex] = [...updatedComments[currentIndex], newComment];
        setComments(updatedComments);
        setNewComment("");
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUploadedImage(imageUrl);
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
                {/* Left Sidebar */}
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
                <div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-b from-orange-200 to-blue-300 p-4 relative">
                    <div className="w-3/4 bg-white rounded-lg shadow-lg p-4">
                        <img
                            src={uploadedImage || capturedImage || wallpapers[currentIndex]}
                            alt="Wallpaper"
                            className="w-full h-96 object-cover rounded-lg"
                        />
                    </div>

                    {/* Next Button */}
                    <button
                        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
                        onClick={nextWallpaper}
                    >
                        <FaArrowRight className="text-gray-700" size={20} />
                    </button>
                </div>

                {/* Right Section */}
                <div className="w-1/4 p-4 flex flex-col items-center">
                    {/* Thumbnail wallpapers */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        {wallpapers.map((wallpaper, index) => (
                            <img
                                key={index}
                                src={wallpaper}
                                alt={`wallpaper${index + 1}`}
                                className="w-full h-24 object-cover rounded-lg cursor-pointer"
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>

                    {/* Camera, Upload, Image buttons */}
                    <div className="flex justify-between w-full mb-4">
                        <button className="p-3 bg-orange-500 text-white rounded-full">
                            <FaCamera />
                        </button>
                        <button className="p-3 bg-orange-500 text-white rounded-full"
                            onClick={() => navigate("/upload-image")}>
                            <FaImage />
                        </button>
                        <button
                            className="p-3 bg-orange-500 text-white rounded-full"
                            onClick={() => fileInputRef.current.click()}
                        >
                            <FaUpload />
                        </button>
                    </div>

                    {/* Hidden File Input */}
                    <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />

                    {/* Comments Section */}
                    <div className="w-full bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Comments</h3>
                        <div className="max-h-32 overflow-y-auto border-t mt-2 pt-2">
                            {comments[currentIndex].map((comment, index) => (
                                <div key={index} className="p-2 border-b text-sm">
                                    {comment}
                                </div>
                            ))}
                        </div>

                        {/* Add Comment */}
                        <div className="mt-2 flex">
                            <input type="text" className="border p-2 flex-1 rounded-l text-sm" placeholder="Write a comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)} />
                            <button className="bg-orange-500 text-white p-2 rounded-r text-sm" onClick={addComment}>Add</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Container */}
            <div className="flex justify-between items-center p-4 bg-white shadow-md border-t">
                {/* Like, Dislike, Comment, and Views */}
                <div className="flex space-x-6">
                    <div className="flex items-center space-x-1 cursor-pointer">
                        <FaThumbsUp className="text-gray-600" />
                        <span>123</span>
                    </div>
                    <div className="flex items-center space-x-1 cursor-pointer">
                        <FaThumbsDown className="text-gray-600" />
                        <span>10</span>
                    </div>
                    <div className="flex items-center space-x-1 cursor-pointer">
                        <FaComment className="text-gray-600" />
                        <span>45</span>
                    </div>
                    <div className="flex items-center space-x-1 cursor-pointer">
                        <FaEye className="text-gray-600" />
                        <span>567</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
