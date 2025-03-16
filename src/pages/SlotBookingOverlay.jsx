import React, { useState, useCallback } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const SlotBookingOverlay = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleTimeSlotClick = (slot) => {
        navigate("/slot-confirmation", { state: { time: slot } });
    };

    // Generate time slots with 1-hour gaps (9 AM - 9 PM)
    const generateTimeSlots = useCallback(() => {
        return Array.from({ length: 13 }, (_, i) => `${9 + i}:00 - ${10 + i}:00`);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center transition-all ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <div className="bg-white w-2/3 h-3/4 rounded-lg shadow-lg p-6 flex relative">
                {/* Left: Calendar */}
                <div className="w-1/2 p-4">
                    <h2 className="text-xl font-bold mb-4">Select a Date</h2>
                    <Calendar
                        onChange={setSelectedDate}
                        value={selectedDate}
                        tileClassName={({ date, view }) =>
                            view === "month" && date.toDateString() === selectedDate.toDateString()
                                ? "selected-date"
                                : ""
                        }
                        className="border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Right: Time Slots */}
                <div className="w-1/2 p-4">
                    <h2 className="text-xl font-bold mb-4">Available Time Slots</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {generateTimeSlots().map((slot, index) => (
                            <button
                                key={index}
                                className="p-2 border rounded-md bg-gray-200 hover:bg-green-500 hover:text-white transition"
                                onClick={() => handleTimeSlotClick(slot)}
                            >
                                {slot}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Close Button */}
                <button className="absolute top-4 right-4 text-gray-600 hover:text-black" onClick={onClose}>
                    <FaTimes size={24} />
                </button>
            </div>
        </div>
    );
};

export default SlotBookingOverlay;
