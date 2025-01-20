import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Countdown.css"; 

const messages = [
    { text: "I did something cool", button: "Auna Enti" },
    { text: "Time choosav ga aagava", button: "aaganu" },
    { text: "pakka na?", button: "yes" },
    { text: "maree ekkuva sep led ga", button: "cheppu bey" },
    { text: "literally less than a day", button: "chal dengei, nen ipde choostha" },
    { text: "anthe antav", button: "haan" },
    { text: "sare kani", button: "yasss" },
    { text: "UCHAPKO" }
];

const Countdown = () => {
    const navigate = useNavigate();
    const targetDate = new Date("2025-01-23T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;
            
            if (difference <= 0) {
                clearInterval(timer);
                navigate("/birthday"); // Redirect when time is up
            } else {
                setTimeLeft(difference);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [navigate, targetDate]);

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return (
        <div className="countdown-container">
            <div className="countdown-box">
                <span className="countdown-item">{days}<small>Days</small></span>
                <span className="countdown-item">{hours}<small>Hours</small></span>
                <span className="countdown-item">{minutes}<small>Minutes</small></span>
                <span className="countdown-item">{seconds}<small>Seconds</small></span>
            </div>

            {/* Display messages sequentially */}
            <div className="message-box">
                <p className="message-text">{messages[messageIndex].text}</p>
                {messageIndex < messages.length - 1 ? (
                    <button className="next-button" onClick={() => setMessageIndex(prev => prev + 1)}>
                        {messages[messageIndex].button}
                    </button>
                ) : (
                    <p className="wait-text"></p>
                )}
            </div>

            <div className="confetti"></div> {/* Confetti Effect */}
        </div>
    );
};

export default Countdown;
