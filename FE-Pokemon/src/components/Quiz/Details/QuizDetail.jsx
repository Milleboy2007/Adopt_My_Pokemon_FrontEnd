import { useLoaderData } from "react-router-dom"
import { useState } from "react"
import './QuizDetails.css'

export default function QuizDetail() {
  const { quiz, questions } = useLoaderData()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  function answerQuestion(answer) {
    setSelectedAnswer(answer)

    setTimeout(() => {
    if (answer === questions[currentQuestionIndex].answer) {
      setScore(score => score + 1)
    }
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(index => index + 1)
    } else {
      setShowResult(true)
    }
    setSelectedAnswer(null)
    }, 1000)
  }

  if (showResult) return (
    <div className="quiz-result">
      <div className="quiz-result-card">
        <h2>Résultat 🎉</h2>
        <p>Score : {score} / {questions.length}</p>
        <p>Crédits gagnés : {score * (quiz.recompenseCredits / questions.length)}</p>
      </div>
    </div>
  )

  const currentQuestion = questions[currentQuestionIndex]
  return (
    <div className="quiz-detail-container">
      <div className="quiz-detail-card">
        <h2>{quiz.titre}</h2>
        <p className="quiz-progress">Question {currentQuestionIndex + 1} / {questions.length}</p>
        <p className="quiz-question">{currentQuestion.question}</p>
        <div className="quiz-choices">
          {currentQuestion.choices.map(answer => {
            let btnClass = "quiz-choice-btn"
            if (selectedAnswer) {
              if (answer === currentQuestion.answer) btnClass += " correct" 
              else if (answer === selectedAnswer) btnClass += " wrong" 
            }
            return (
              <button
                key={answer}
                className={btnClass}
                onClick={() => !selectedAnswer && answerQuestion(answer)} 
              >
                {answer}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}