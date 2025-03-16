import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);

    const handleLogin = () => {
        // Perform authentication logic here (if needed)
        navigate("/dashboard"); // Redirect to Dashboard
    };

    return (
        <div className="flex h-screen">
            {/* Left Side - Image */}
            <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/images/login-bg.png')" }}></div>

            {/* Right Side - Form */}
            <div className="w-1/2 flex flex-col justify-center items-center bg-white">
                <div className="w-2/3">
                    {/* Header */}
                    <h1 className="text-4xl font-bold text-orange-400 mb-6">Hello'</h1>

                    {/* Toggle Buttons */}
                    <div className="flex gap-4 mb-6">
                        <button
                            className={`px-6 py-2 rounded-full ${isLogin ? "bg-blue-500 text-white" : "border border-gray-500"}`}
                            onClick={() => setIsLogin(true)}
                        >
                            Login
                        </button>
                        <button
                            className={`px-6 py-2 rounded-full ${!isLogin ? "bg-blue-500 text-white" : "border border-gray-500"}`}
                            onClick={() => setIsLogin(false)}
                        >
                            Signup
                        </button>
                    </div>

                    {/* Form Fields */}
                    {isLogin ? (
                        <div>
                            <input type="email" placeholder="Email" className="w-full border-b-2 border-blue-500 outline-none py-2 my-2" />
                            <input type="text" placeholder="Username" className="w-full border-b-2 border-blue-500 outline-none py-2 my-2" />
                            <input type="password" placeholder="Password" className="w-full border-b-2 border-blue-500 outline-none py-2 my-2" />

                            {/* Login Button */}
                            <button
                                onClick={handleLogin}
                                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full w-full"
                            >
                                Login
                            </button>

                            <p className="text-gray-500 mt-2 text-center cursor-pointer">Forgot Password?</p>
                        </div>
                    ) : (
                        <div>
                            <input type="text" placeholder="Name" className="w-full border-b-2 border-blue-500 outline-none py-2 my-2" />
                            <input type="tel" placeholder="Mobile Number" className="w-full border-b-2 border-blue-500 outline-none py-2 my-2" />
                            <input type="email" placeholder="Email" className="w-full border-b-2 border-blue-500 outline-none py-2 my-2" />
                            <input type="password" placeholder="Password" className="w-full border-b-2 border-blue-500 outline-none py-2 my-2" />

                            {/* Signup Button */}
                            <button
                                onClick={handleLogin}
                                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full w-full"
                            >
                                Signup
                            </button>
                        </div>
                    )}

                    {/* Divider */}
                    <div className="flex items-center justify-center mt-4">
                        <hr className="w-1/3 border-gray-400" />
                        <span className="mx-2 text-gray-500">or</span>
                        <hr className="w-1/3 border-gray-400" />
                    </div>

                    {/* Social Login */}
                    <div className="flex justify-center gap-6 mt-4">
                        <button className="border px-4 py-2 rounded-full flex items-center">
                            <img src="/images/google-icon.png" alt="Google" className="w-6 h-6 mr-2" />
                            Google
                        </button>
                        <button className="border px-4 py-2 rounded-full flex items-center">
                            <img src="/images/facebook-icon.png" alt="Facebook" className="w-6 h-6 mr-2" />
                            Facebook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
