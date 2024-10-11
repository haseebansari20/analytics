"use client"

import React from 'react'
import { sendGAEvent } from '@next/third-parties/google'

const Button = () => {
  return (
   <button onClick={()=>sendGAEvent({event:"Ansari", value:"xyz"})}>Click</button>
  )
}

export default Button