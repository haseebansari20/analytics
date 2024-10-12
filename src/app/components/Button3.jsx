"use client"

import { sendGTMEvent } from '@next/third-parties/google'

import React from 'react'

const Button3 = () => {
  return (
    <div> <button
    onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })}
    className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform active:scale-95 active:bg-blue-700">
    Send Event
  </button></div>
  )
}

export default Button3