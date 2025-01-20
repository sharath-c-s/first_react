import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Countdown from "./components/Countdown";
import Wish from "./components/Wish";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Countdown />} />
                <Route path="/birthday" element={<Wish />} />
            </Routes>
        </Router>
    );
};

export default App;
