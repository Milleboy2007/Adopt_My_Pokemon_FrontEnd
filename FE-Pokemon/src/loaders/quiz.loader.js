import { getQuiz } from "../services/api"
import { requireAuth } from "../services/auth"

export async function quizLoader({ params }) {
  await requireAuth()

  const data = await getQuiz(params.id)
  
  return { quiz: data.quiz, questions: data.questions }
}

export async function quizzesLoader() {
  await requireAuth()
  const quizzes = await getQuizzes()
  return { quizzes }
}