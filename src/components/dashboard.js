import React, { useEffect } from 'react'; // Import useEffect hook

const Dashboard = () => {
  
 // Empty dependency array to run the effect only once after the initial render

  return (
    
    <>
    <div className="relative w-40 h-40">
      <div
        className="absolute top-0 left-0 w-full h-full bg-purple-500 clip-circle"
        style={{ transform: 'rotate(0deg)' }}
      ></div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-blue-500 clip-circle"
        style={{ transform: 'rotate(45deg)' }}
      ></div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-green-500 clip-circle"
        style={{ transform: 'rotate(90deg)' }}
      ></div>
      {/* Add more segments as needed */}
      <div className="absolute top-0 left-0 w-full h-full text-center flex items-center justify-center font-bold text-white">
        <span className="text-2xl">75%</span>
      </div>
    </div>

    </>
  );
};



export default Dashboard;
