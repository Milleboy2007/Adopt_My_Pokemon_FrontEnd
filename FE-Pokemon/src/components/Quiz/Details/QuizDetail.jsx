import { Link, useLoaderData } from "react-router-dom"
import { useState } from "react"
import './QuizDetails.css'
import { getCurrentUser, addCredits } from "../../../services/api"


export default function QuizDetail() {
  const { quiz, questions, error } = useLoaderData()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  
  if(error) return (
      <div className="quiz-detail-container">
        <div className="quiz-detail-card" style={{textAlign: 'center'}}>
          <h2>Reviens Demain</h2>
          <p>{error}</p>
          <Link to="/user/quiz" className="back-btn">voir les autres quiz</Link>
        </div>
      </div>
    )



async function answerQuestion(answer) {
  setSelectedAnswer(answer)

  setTimeout(async () => {
    const isCorrect = answer === questions[currentQuestionIndex].answer
    const newScore = isCorrect ? score + 1 : score // calcul direct sans state

    if (isCorrect) setScore(newScore)

    const isLastQuestion = currentQuestionIndex + 1 >= questions.length

    if (isLastQuestion) {
      const user = await getCurrentUser()
      const creditsEarned = Math.round(newScore * (quiz.recompenseCredits / questions.length))
      await addCredits(user.id, creditsEarned, quiz.difficulte)
      setShowResult(true)
    } else {
      setCurrentQuestionIndex(i => i + 1)
    }

    setSelectedAnswer(null)
  }, 1000)
}

  if (showResult) 
    return (
    <div className="quiz-result">
      <div className="quiz-result-card">
        <h2>Résultat 🎉</h2>
        <p>Score : {score} / {questions.length}</p>
        <p>Crédits gagnés : {Math.round(score * (quiz.recompenseCredits / questions.length))}</p>
        
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