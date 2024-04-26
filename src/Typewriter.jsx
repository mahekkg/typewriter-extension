import React, { useState, useEffect } from "react";
import typewriterSound from "./assets/sound.wav";

const TypewriterApp = () => {
  const [typewriterEnabled, setTypewriterEnabled] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (typewriterEnabled) {
        // Check if a key is pressed here
        console.log("Key pressed:", event.key);

        // Play typewriter sound
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
    <>
      <div className="bg-gray-900  p-6 shadow-md m-auto rounded-sm">
        <h2 className="text-lg font-bold text-white mb-4">
          Typewriter Extension
        </h2>
        <button
          onClick={toggleTypewriterSound}
          className="bg-green-500 text-white py-2 px-4 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          {typewriterEnabled ? "Disable" : "Enable"}
        </button>
      </div>
    </>
  );
};

export default TypewriterApp;
