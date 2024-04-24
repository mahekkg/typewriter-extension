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
    <div class="flex flex-col items-center justify-center w-40 h-20">
      <button
        onClick={toggleTypewriterSound}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {typewriterEnabled ? "Disable" : "Enable"} Typewriter Sound
      </button>
      <textarea
        class="mt-4 border rounded-md px-4 py-2"
        placeholder="Type here..."
      ></textarea>
    </div>
  );
};

export default TypewriterApp;
