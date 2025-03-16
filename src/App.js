import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Dashboard from "./pages/DashBoard";
import Profile from "./pages/Profile";
import ImageUploadPage from "./pages/ImageUploadPage";
import SlotConfirmationPage from "./pages/SlotConfirmationPage";
import SellSlotPage from "./pages/SellSlotPage";
import SharingPage from "./pages/SharingPage";
import AboutPage from "./pages/AboutPage";
import DownloadedImagesPage from "./pages/DownloadedImagesPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root path to Login */}
        <Route path="/" element={<Navigate to="/landing-page" />} />

        {/* Routes */}
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload-image" element={<ImageUploadPage />} />
        <Route path="/slot-confirmation" element={<SlotConfirmationPage />} />
        <Route path="/sell-slot" element={<SellSlotPage />} />
        <Route path="/sharing" element={<SharingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/download" element={<DownloadedImagesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
