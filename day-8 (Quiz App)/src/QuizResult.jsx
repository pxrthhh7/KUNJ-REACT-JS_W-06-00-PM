import React from 'react'

const QuizResult = (props) => {
    return (
        <>
            <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-3xl p-6 md:p-10 w-full max-w-xl shadow-xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">🎉 Quiz Completed!</h2>
                <p className="text-xl md:text-2xl text-white mb-4">Your Score:</p>
                <p className="text-5xl font-extrabold text-green-100 mb-8">{props.score}/{props.totalScore}</p>
            </div>
        </>
    )
}

export default QuizResult
