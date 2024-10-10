// import React from "react";

// const Card = () => {
//   return (
//     <div className="p-3">
//       <div class="rounded overflow-hidden shadow-lg w-2/4 relative">
//         <div>
//           <img
//             class=""
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRxuyt5nkpGuRO4N7FhzzcBccKw0Cdvj-sjGiSvAUxzQG_8UvuRPvp5Riab60Zp7TM-2kNOrQ"
//             alt="Sunset in the mountains"
//           />
//         </div>
//         <div className="absolute top-0 p-1.5 ">
//           <div className="space-x-2">
// <button className="bg-white p-1 text-sm">6.0</button>
// <button className="text-white bg-orange-600 text-sm py-0.5 px-1 rounded-sm">
//   R
// </button>
//           </div>
// <div className="w-full">
//   <button className="text-lg p-4 rounded-full text-white bg-gray-700 hover:bg-orange-600 flex">
//     Play
//   </button>
//   <h3 className="text-bold text-white font-bold">Backcountry</h3>
//   <div className="space-x-4">
//     <button className="border-2 p-3 rounded-2xl text-white">
//       My List
//     </button>
//     <button className="border-2 p-3 rounded-2xl text-white">
//       More
//     </button>
//   </div>
//   <p className="text-white">Adventure | Drama | Horror</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
import React from "react";

const Card = () => {
  return (
    <div className="p-3">
      <div className="relative overflow-hidden w-[12%] h-[35vh] shadow-lg p-1 rounded-md bg-[url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRxuyt5nkpGuRO4N7FhzzcBccKw0Cdvj-sjGiSvAUxzQG_8UvuRPvp5Riab60Zp7TM-2kNOrQ')] bg-cover bg-no-repeat hover:scale-110">
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 transition-opacity duration-300  shade">
          </div>
          <div className="p-2 absolute opacity-0 hover:opacity-100 transition-opacity">
            <div className="space-x-2">
              <button className="bg-white p-1 text-sm">6.0</button>
              <button className="text-white bg-orange-600 text-sm py-0.5 px-1 rounded-sm">
                R
              </button>
            </div>
            <div className="">
              <div className="flex items-center justify-center rounded-lg shadow-lg py-3">
                <button className="text-lg p-4 rounded-full text-white bg-gray-700 hover:bg-orange-600">
                  Play
                </button>
              </div>
              <h3 className="text-bold text-white font-bold text-lg py-2">
                Backcountry
              </h3>
              <div className="space-x-4">
                <button className="border-2 p-3 rounded-2xl text-white">
                  My List
                </button>
                <button className="border-2 p-3 rounded-2xl text-white">
                  More
                </button>
              </div>
              <p className="text-white pt-3">Adventure | Drama | Horror</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Card;
