import './quiz.css'
import { useLoaderData, Link } from 'react-router-dom'

export default function Quiz() {
  const { quizzes } = useLoaderData()

  return (
    <>
    <div className="quiz-container">
      <h2>Choisissez un quiz</h2>
      <div className="quiz-list">
        {quizzes.map(quiz => (
          <div key={quiz.id} className="quiz-item">
            <h2>{quiz.titre}</h2>
            <p>Difficulté : {quiz.difficulte}</p>
            <p>Questions : {quiz.nombreDeQuestions}</p>
            <p>Récompense : {quiz.recompenseCredits} crédits</p>
            <Link to={`/quiz/${quiz.id}`} className="start-quiz-button">Commencer</Link>
          </div>
        ))}
      </div>
    </div>

    </>
  )
}

