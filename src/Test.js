import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

let check = 0;
let index = 0;
let correct_reaction_time = [];
let incorrect_reaction_time = [];

function Test() {   
    const navigate = useNavigate();
    const images = [
        require('./test_image/image-1.jpg'),
        require('./test_image/image-2.jpg'),
        require('./test_image/image-3.jpg'),
        require('./test_image/image-4.jpg'),
        require('./test_image/image-5.jpg'),
        require('./test_image/image-6.jpg'),
        require('./test_image/image-7.jpg'),
        require('./test_image/image-8.jpg'),
        require('./test_image/image-9.jpg'),
        require('./test_image/image-10.jpg'),
    ];
    const pattern1 = [1,2,3,4,3,4,5,6,5,7,8,9,8,9,10];
    const pattern1marked = [0,0,0,0,1,1,0,0,1,0,0,0,1,1,0];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [changeCount, setChangeCount] = useState(0);
    const [changeCorrectScore, setChangeCorrectScore] = useState(0);
    const [changeInCorrectScore, setChangeInCorrectScore] = useState(0);

    const [startTime, setStartTime] = useState(performance.now());
    const [myArray, setMyArray] = useState([]);

    // React.useEffect(() => {
    //     setStartTime(performance.now());
    // }, []);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("changeCount: " + changeCount); 
            //console.log(reactionTime);


            if (changeCount < pattern1.length-1) {
                index = changeCount;
                setCurrentImageIndex(prevIndex => (prevIndex + 1));
                setChangeCount(changeCount + 1);
            } else {
                moveToScore();
            }
            check = 0;
        }, 3000);
    
        return () => clearTimeout(timer);
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

    function moveToScore() {
        let tosend ={
            timearr: correct_reaction_time,
            timearr2: incorrect_reaction_time,
            correct: changeCorrectScore,
            incorrect: changeInCorrectScore
        };
        correct_reaction_time = [];
        incorrect_reaction_time = [];
        navigate("/Score", {state : tosend});
    };

    function pressed() {
        console.log("Space Bar Pressed");
        console.log(check);
        console.log("inside spacebar: " + changeCount);
    
        const currentChangeCount = index+1;
    
        if (pattern1marked[currentChangeCount] === 1 && check === 0) {
            setChangeCorrectScore(prevScore => prevScore + 1); 
            const endTime = performance.now();
            const timeDifference = endTime - startTime - (index+1)*3000;
            correct_reaction_time.push(timeDifference);
            console.log(correct_reaction_time);
            console.log("inside correct solution");
        }
        else if (pattern1marked[currentChangeCount] !== 1 && check === 0) {
            setChangeInCorrectScore(prevScore => prevScore - 1); 
            const endTime = performance.now();
            const timeDifference = endTime - startTime - (index+1)*3000;
            incorrect_reaction_time.push(timeDifference);
            console.log(incorrect_reaction_time);
            console.log("inside incorrect solution");
        }

        check = 1;
    };


    

    return (
        <>
      <div className="mb-16">
        <div className="bg-gray-100">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-transparent">
                <span className="relative inline-block">
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
                  <span className="relative text-transparent">The</span>
                </span >
                quick, brown fox jumps over a lazy dog
              </h2>
              
            </div>
            
          </div>
        </div>
        <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-gray-100 h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-1 lg:max-w-screen-md" style={{ marginTop: "-140px", width: "80%", maxWidth: "600px" }}>
           <img src={images[pattern1[currentImageIndex]-1]} alt="Description of the image" style={{ width: "100%", height: "auto" }} />
        </div>

        </div>
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-1 lg:max-w-screen-md" style={{ marginTop: "-140px", width: "80%", maxWidth: "600px", margin: "auto" }}>
          
        </div>
      </div>
      
      <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-1 lg:max-w-screen-md" style={{ marginTop: "-140px", width: "80%", maxWidth: "600px" }}>
      {/* {paragraph} */}
      </div>
      <h2>Your current Correct Score is {changeCorrectScore}</h2>
      <h2>Your current InCorrect Score is {changeInCorrectScore}</h2>

    </>  

    );
}

export default Test;
