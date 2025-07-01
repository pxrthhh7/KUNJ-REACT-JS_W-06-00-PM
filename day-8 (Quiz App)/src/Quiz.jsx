import React, { useState } from 'react'
import questions from './question'
import QuizResult from './QuizResult'

const Quiz = () => {

  const [currenetQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false)

  const handleNext = () => {
    updateScore();
    if (currenetQuestion < questions.length - 1) {
      setCurrentQuestion(currenetQuestion + 1);
      setSelectedOption(null); // Correct way to reset selected option
    }
    else {
      setShowResult(true)
    }
  };


  const updateScore = () => {
    if (selectedOption === questions[currenetQuestion].answerIndex) {
      setScore(score + 1)
    }
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 px-4 py-10">

        {showResult ? (<QuizResult score={score} totalScore={questions.length} />) : (
          <>

            <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-3xl p-6 md:p-10 w-full max-w-xl shadow-xl">

              {/* Question Number */}
              <p className="text-sm text-white/90 mb-2">Question {currenetQuestion + 1} of {questions.length}</p>

              {/* Question */}
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
                🧠 {questions[currenetQuestion].question}
              </h2>

              {/* Options */}
              <div className="flex flex-col gap-4">
                {
                  questions[currenetQuestion].options.map((option, index) => (
                    <button key={index} onClick={() => setSelectedOption(index)} className={`flex items-center gap-3 cursor-pointer px-4 py-3 rounded-xl transition duration-300 text-gray-800 font-medium shadow-md ${selectedOption === index ? 'bg-green-300 ring-2 ring-green-600' : 'bg-white/60 hover:bg-white/80'}`}>
                      <span className="text-lg">🔘</span> {option}
                    </button>
                  ))
                }

              </div>

              {/* Next Button */}
              <div className="mt-8">
                <button onClick={handleNext} className="w-full cursor-pointer px-6 py-4 rounded-xl bg-white/60 hover:bg-white/80 transition duration-300 text-gray-800 font-semibold text-lg shadow-md">
                  ➡️ Next
                </button>
              </div>
            </div>
          </>)}
      </div>
    </>
  )
}

export default Quiz
