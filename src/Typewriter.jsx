import React, { useState, useEffect } from "react";
import typewriterSound from "./assets/sound.wav";

const TypewriterApp = () => {
  const [typewriterEnabled, setTypewriterEnabled] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (typewriterEnabled) {
        console.log("Key pressed:", event.key);
        new Audio(typewriterSound).play();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [typewriterEnabled]);

  const toggleTypewriterSound = () => {
    setTypewriterEnabled(!typewriterEnabled);
  };

  return (
    // <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    <div className="bg-white p-10 shadow-xl rounded-2xl max-w-md w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-pink-300 opacity-50"></div>
      <h2 className="text-2xl font-extrabold text-gray-800 mb-6 text-center relative z-10">
        Typewriter ✨
      </h2>
      <button
        onClick={toggleTypewriterSound}
        className={`relative z-10 w-full py-4 rounded-lg text-lg font-bold transition-transform transform hover:scale-105 focus:outline-none ${
          typewriterEnabled
            ? "bg-red-500 text-white shadow-md shadow-red-500"
            : "bg-green-500 text-white shadow-md shadow-green-500"
        }`}
      >
        {typewriterEnabled ? "Disable Sound" : "Enable Sound"}
      </button>
    </div>
    // </div>
  );
};

export default TypewriterApp;
