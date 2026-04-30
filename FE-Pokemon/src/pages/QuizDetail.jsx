import { useLoaderData } from "react-router-dom"
import { useState } from "react"

export default function QuizDetail() {
    const { quiz, questions } = useLoaderData()
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)

    function answerQuestion(answer) {
        if (answer === questions[currentQuestionIndex].answer) {
            setScore(score => score + 1)
        }
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(index => index + 1)
        } else {
            setShowResult(true)
        }
    } 

    if (showResult) return (
        <div>
            <h2>Quiz Résultat</h2>
            <p>Mon score: {score} / {questions.length}</p>
            <p>Crédits gagnés: {score * (quiz.recompenseCredits / questions.length)}</p>
        </div>
    )

    const currentQuestion = questions[currentQuestionIndex]
    return (
        <div>
            <h2>{quiz.titre}</h2>
            <p>Question {currentQuestionIndex + 1} / {questions.length}</p>
            <p>{currentQuestion.question}</p>
            {currentQuestion.choices.map(answer => (
                <button key={answer} onClick={() => answerQuestion(answer)}>
                    {answer}
                </button>
            ))}
        </div>
    )
} 