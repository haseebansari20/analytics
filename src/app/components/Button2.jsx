"use client"

// Import the event tracking function
import { trackEvent } from '../utils/gtag';  // Adjust the import path

export default function HomePage() {
  const handleButtonClick = () => {
    trackEvent('button_click','User Interaction','Sign Up Button',1); 
   
  };

  return (
    <button onClick={handleButtonClick} className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform active:scale-95 active:bg-blue-700" >
      Sign Up
    </button>
  );
}
