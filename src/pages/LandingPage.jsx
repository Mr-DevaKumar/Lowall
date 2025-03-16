import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 500); // Start animation after 0.5s
        setTimeout(() => navigate("/login"), 3000); // Redirect to login after animation
    }, [navigate]);

    return (
        <div className="flex items-center justify-center h-screen bg-[#30458C] overflow-hidden">
            <img
                src="/images/logo.png"
                alt="Logo"
                className={`w-32 h-32 transition-all duration-[2s] ease-in-out 
                ${animate ? "scale-[10] opacity-0" : "translate-y-[-200px] opacity-100"}`}
            />
        </div>
    );
};

export default LandingPage;
