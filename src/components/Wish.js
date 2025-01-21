import React, { useState, useEffect, useRef } from "react";
import "../Wish.css";
import JSConfetti from "js-confetti";
import birthdaySong from "../assets/song.mp3"; // Ensure song.mp3 exists in src/assets/

const poemLines = [
    { text: "Dear Miss January,", button: "A new journey awaits!" },
    { text: "Your parents await to see how far you'll grow", button: "oka sari" },
    { text: "Your sister awaits to see how far you'll go", button: "inkosari" },
    { text: "Subbu awaits to see how much more he can annoy you", button: "crazy kada, malla nokku" },
    { text: "Many patients await your kind treatment", button: "manchi doctor ammavi kada" },
    { text: "Your friends await for many great times ahead", button: "motham parties annattu!" },
    { text: "Your future awaits to meet you and be known", button: "baa rasana?" },
    { text: "And your past awaits to be held fondly and remembered", button: "not even this?" },
    { text: "The universe awaits to take you under its wing again", button: "or this?" },
    { text: "The whole world holds its breath awaiting your arrival", button: "sarle nokku" },
    { text: "I await to see everything you'll be and become", button: "one last time" },
    { text: "(go to the top of the page for the last line of the poem)" }
];

const Wish = () => {
    const [displayedLines, setDisplayedLines] = useState([poemLines[0]]); // Start with first line
    const [isPlaying, setIsPlaying] = useState(false);
    const poemContainerRef = useRef(null);

    // Function to handle button click (reveals next line)
    const handleNextLine = () => {
        const audio = document.getElementById("birthdayAudio");

        if (!isPlaying && audio) {
            audio.play()
                .then(() => setIsPlaying(true))
                .catch(error => console.log("Audio play error:", error));
        }

        if (displayedLines.length < poemLines.length) {
            setDisplayedLines(prevLines => [...prevLines, poemLines[prevLines.length]]);
        }
    };

    // Auto-scroll to bottom when a new line is added
    useEffect(() => {
        if (poemContainerRef.current) {
            poemContainerRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    }, [displayedLines]);

    return (
        <div className="wish-container">
            <h1 className="fireworks-text"> Happy Birthday Dr. Mounika M! </h1>
            <h2 className="animated-glow">Wishing you the best year ahead and better ones to follow</h2>

            {/* Audio Element */}
            <audio id="birthdayAudio" src={birthdaySong} loop></audio>

            {/* Fireworks Animation */}
            <div className="fireworks"></div>

            {/* Image Gallery */}
            <div className="image-gallery">
                <img src="./images/1.jpg" alt="Person 1" className="person-image"/>
                <img src="./images/2.jpg" alt="Person 2" className="person-image"/>
                <img src="./images/3.jpg" alt="Person 3" className="person-image"/>
            </div>

            {/* Poem Reveal Section */}
            <div className="poem-container" ref={poemContainerRef}>
                {displayedLines.map((line, index) => (
                    <p key={index} className="poem-line">{line.text}</p>
                ))}

                {/* Show button only if more lines exist */}
                {displayedLines.length < poemLines.length && (
                    <button className="next-button" onClick={handleNextLine}>
                        {displayedLines[displayedLines.length - 1].button}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Wish;
