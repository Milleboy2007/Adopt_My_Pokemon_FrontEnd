import { getQuiz } from "../services/api"
import { requiredAuth } from "../services/auth"

export async function quizLoader({ params }) {
  await requiredAuth()

  const data = await getQuiz(params.id)
  
  return { quiz: data.quiz, questions: data.questions }
}

export async function quizzesLoader() {
  await requiredAuth()

  const quizzes = await getQuizzes()
  return { quizzes }
}