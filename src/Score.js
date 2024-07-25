import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Graph from "./components/dashboard";

function sumArray(arr) {
  return arr.reduce((acc, current) => acc + current, 0);
}

function Score() {
  const navigate = useNavigate();
  const location = useLocation();

  const correct = location.state.correct;
  const incorrect = -(location.state.incorrect);
  const timearr = location.state.timearr;
  const timearr2 = location.state.timearr2;

  var average_reaction_time = 0;
  var average_reaction_time_incorrect = 0;

  average_reaction_time = Math.abs(Math.round(sumArray(timearr) / timearr.length - 1));
  average_reaction_time_incorrect = Math.abs(Math.round(sumArray(timearr2) / timearr2.length - 1));

  var correct_percentage = ((correct / (correct + incorrect)) * 100).toFixed(2);

  var correct_hit = ((correct / 5) * 100).toFixed(2);

  function moveToGuideline() {
    navigate("/Home");
  }

  return (
    <>
     

    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"style={{ marginTop: "-40px"}}>
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Working Memory
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="d5589eeb-3fca-4f01-ac3e-983224745704"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Analyzing</span>
          </span>{' '}
           Your Mental Agility: Insights from the 2-Back Test
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          
"Review your performance. Identify strengths and areas for improvement with detailed analysis and tailored insights."
        </p>
      </div>
      <div className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
        <div className="relative flex flex-col items-center h-full py-10 duration-300 bg-white rounded-sm transition-color sm:items-stretch sm:flex-row">
          <div className="px-12 py-8 text-center">
            <h6 className="text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
              {correct_hit} %
            </h6>
            <p className="text-center md:text-base">
              Percentage of Correct Hit compare to Total number of Correct Values.
            </p>
          </div>
          <div className="w-56 h-1 transition duration-300 transform bg-gray-300 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-1" />
          <div className="px-12 py-8 text-center">
            <h6 className="text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
              {correct_percentage} %
            </h6>
            <p className="text-center md:text-base">
              Percentage of Correct Hit compare to Total number of Hits.
            </p>
          </div>
        </div>
      </div>
      
    </div>



    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" style={{ marginTop: "-140px"}}>
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">15</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
          Total Number of Trials
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">{correct}</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Correct Hit
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">{5 - correct}</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Missed
          </p>
        </div>
        <div class="text-center">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">{incorrect}</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            False Hit
          </p>
        </div>
      </div>
    </div>




    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 row-gap-8 lg:grid-cols-2">
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400 text-center">
              {average_reaction_time} ms
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
              <svg
                className="text-teal-900 w-7 h-7"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg"> Average Reaction Time for Postive Hits</p>
          <p className="text-gray-700">
          The average reaction time of a positive hit in a 2-back test indicates how long, on average, it takes for participants to correctly identify
          </p>
        </div>
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
              {average_reaction_time_incorrect} ms
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
              <svg
                className="text-teal-900 w-7 h-7"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">Average Reaction Time for Negative Hits</p>
          <p className="text-gray-700">
            The average reaction time of Neagtive Hit in a 2-back test indicate how long, on average, it takes for participant to respond but response in incorrect.
          </p>
        </div>
        <div>

        </div>
        
      </div>
    </div>


      








    {/* Button */}
    <div className="text-center" style={{ marginTop: "-40px"}}>
    <button
          onClick={moveToGuideline}
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gray-600 hover:bg-black focus:shadow-outline focus:outline-none"        >
          Back to the Home
        </button>
    </div>  
    {/* . */}

    

    <div class="w-full h-8">
    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
            class="fill-current text-gray-400"></path>
    </svg>
</div>


    </>
  );
}

export default Score;
