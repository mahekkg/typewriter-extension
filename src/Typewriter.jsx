import React, { useState, useEffect } from 'react';
import typewriterSound from './assets/sound.wav'

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

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [typewriterEnabled]);

  const toggleTypewriterSound = () => {
    setTypewriterEnabled(!typewriterEnabled);
  };

  return (
    <div>
      <button onClick={toggleTypewriterSound}>
        {typewriterEnabled ? 'Disable' : 'Enable'} Typewriter Sound
      </button>
      <textarea />
    </div>
  );
};

export default TypewriterApp;
