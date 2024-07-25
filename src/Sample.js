import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
let check = 0;
var color = 'gray-100'

export const Header = () => {

  const navigate = useNavigate();

  const images = [
    require('./test_image/image-1.jpg'),
    require('./test_image/image-10.jpg'),
    require('./test_image/image-4.jpg'),
    require('./test_image/image-10.jpg'),
];


const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [changeCount, setChangeCount] = useState(0);
const [paragraph, setParagraph] = useState(null);



function moveTo() {
  check = 0;
  navigate("/Ready");
};

function refreshPage() {
  window.location.reload();
}


useEffect(() => {
  
    if(check === 0){
    const timer = setTimeout(() => {
        console.log("changeCount: " + changeCount);

        if (changeCount < 3) {
            color = 'gray-100'
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
            setChangeCount(changeCount + 1);
        } else {
          setCurrentImageIndex(prevIndex => (prevIndex));
          color = 'gray-100'
          pressspace();
        }
    }, 2300);
  

    return () => clearTimeout(timer);
  }
}, [changeCount]);

  useEffect(() => {
    const handleKeyPress = (event) => {
        if (event.code === "Space") {
            pressed();
        }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
        window.removeEventListener('keydown', handleKeyPress);
    };
}, []);

function pressed() {
  console.log("SpaceBar pressed")
  console.log("check: " + check);
  color = 'gray-300'
  if(check === 1){
    moveTo();
  }

};

function pressspace(){
  check = 1;
  const newParagraph = <p className="text-lg text-center text-gray-700 font-semibold">This is 2-Back case. Press <span className="font-bold">SPACE</span> to start the Test</p>;
  setParagraph(newParagraph);
}
    return (
      <>
      <div className="mb-16">
        <div className="bg-gray-100">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" >
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12" >
              <div >
                
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-3xl md:mx-auto text-transparent" style={{ marginTop: "-10px"}}>
                <span className="relative inline-block" >
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative "></span>
                </span >
                Press SPACE when observe 2-back. . . . .
              </h2>
              
            </div>
            
          </div>
        </div>
        <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-gray-100 h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-1 lg:max-w-screen-md" style={{ marginTop: "-140px", width: "80%", maxWidth: "600px" }}>
           <img src={images[currentImageIndex]} alt="Description of the image" style={{ width: "100%", height: "auto" }} />
        </div>

        </div>
        
      </div>
      
      <div className={`relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-1 lg:max-w-screen-md text-center ${color}`} style={{ marginTop: "-40px", width: "80%", maxWidth: "600px" }}>
      {paragraph}
      {/* check value is {check} */}
      </div>

      <div className={`relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-1 lg:max-w-screen-md text-center ${color}`} style={{ marginTop: "15px", width: "80%", maxWidth: "600px" }}>
      {check === 1 && (
       <a
       onClick={refreshPage}
       className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gray-600 hover:bg-black focus:shadow-outline focus:outline-none"
     >
       Once Again I didn't observe the 2-back
     </a>
      )}
      </div>
      
      {/* <div className={`h-10 w-full bg-${color}`} style={{ marginTop: "110px"}}></div> */}
    </>  
    );
  };

  export default Header;