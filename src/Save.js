import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


function sumArray(arr) {
  return arr.reduce((acc, current) => acc + current, 0);
}

function Score() {
  const navigate = useNavigate();
  const location = useLocation();

  const correct = location.state.correct;
  const incorrect = location.state.incorrect;
  const timearr = location.state.timearr;

  var average_reaction_time = Math.round(sumArray(timearr) / timearr.length - 1);
  var correct_percentage = (correct/5)*100;

  function moveToGuideline() {
    navigate("/Brief");
  }

  return (
    <>
    

    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-600 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Correct Response: {correct}.
          <br />
          Incorrect Response: {incorrect}.
          <br/>
          
          
        </h1>
        <h2 className="text-3xl font-bold text-white mb-4"> Missed 2-back: {5-correct}.</h2>

        <h2 className="text-2xl font-bold text-white mb-4">Correct Percentage is {correct_percentage} %.</h2>
        <h2 className="text-2xl font-bold text-white mb-4">Your Average Reaction Time is {average_reaction_time} millisecond.</h2>
        <table className="table-auto border-collapse border border-white mx-auto mb-8">
          <thead>
            <tr>
              <th className="px-4 py-2 text-white">Reaction Times</th>
            </tr>
          </thead>
          <tbody>
            {timearr.map((time, index) => (
              <tr key={index}>
                <td className="border border-white px-4 py-2 text-white">{time} milliseconds</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={moveToGuideline}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Back to the Home
        </button>
      </div>
    </div>
    
    </>
  );
}

export default Score;
