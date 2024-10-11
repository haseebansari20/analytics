"use client";

import { trackGAEvent } from "../utils/google-analytics";

export default function MyForm({ className }) {
  // This is just a dummy component to show 
  // how to use the trackGAEvent function
  // You can use it in any function call where you 
  // want to track an event
  function handleSubmit(event) {
    trackGAEvent("Ansari","My Category", "My Action", "My Label");
    // handle the actual form submission here
  }

  return (
    <form className={className} action={handleSubmit}>
      <input type="text" placeholder="Name" />
      <button type="submit">Submit</button>
    </form>
  );
}