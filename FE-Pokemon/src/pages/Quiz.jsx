import './quiz.css'

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
            <p>Questions : {quiz.nombreQuestions}</p>
            <p>Récompense : {quiz.recompenseCrédits} crédits</p>
            <Link to={`/quiz/${quiz.id}`} className="start-quiz-button">Commencer</Link>
          </div>
        ))}
      </div>
    </div>

    </>
  )
}

