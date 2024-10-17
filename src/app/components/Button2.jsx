'use client'

import React from 'react';
import { sendGaEvent } from '../utils/new-analytics'; // Adjust the path if necessary

const TestButton = () => {
  return (
    <button
      onClick={() =>
        sendGaEvent({
          action: 'Offers_InstPlan_OnlineSignup',  // Event name
          category: 'User',                        // Event category
          label: 'Test Signup Button',             // Event label
          value: 'xyz',                            // Event value
        })
      } className='bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform active:scale-95 active:bg-blue-700'
    >
      Click Me to Test GA Event
    </button>
  );
};

export default TestButton;
