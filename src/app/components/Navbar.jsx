"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1>Logo</h1>
        <div>
          <button
            onClick={toggle}
            className="text-white bg-green-700 p-2 md:hidden"
          >
            {open ? "Open" : "Close"}
          </button>
          <ul
            className={`${
              open
                ? "h-0 opacity-0 duration-500 md:h-[13vh] md:opacity-100 absolute md:relative "
                : "h-[13vh] opacity-100 absolute bg-zinc-300 duration-500 mt-2 text-center rounded-md border md:relative md:bg-white md:border-none md:duration-0"
            } md:flex md:items-center md:space-x-4`}
          >
            <li>
              <a href="#" className="">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="">
                About
              </a>
            </li>
            <li>
              <a href="#" className="">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// import { useState } from 'react';

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const toggle = () => {
//     setOpen(!open);
//   };

//   return (
//     <div className="flex items-center justify-between p-4">
//       <h1 className="text-xl">Logo</h1>
//       <div>
//         <button
//           onClick={toggle}
//           className="text-white bg-green-700 p-2 md:hidden"
//         >
// {open ? 'Close' : 'Open'}
//         </button>
//       </div>
//       <nav className={`md:flex ${open ? 'block' : 'hidden'}`}>
//         <ul className="flex flex-col md:flex-row md:space-x-4">
//           <li><a href="#" className="">Home</a></li>
//           <li><a href="#" className="">About</a></li>
//           <li><a href="#" className="">Services</a></li>
//           <li><a href="#" className="">Contact</a></li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
