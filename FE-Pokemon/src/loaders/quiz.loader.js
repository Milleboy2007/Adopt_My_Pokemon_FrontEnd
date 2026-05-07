import { getQuizzes, getQuiz } from "../services/api"
import { requiredAuth } from "../services/auth"

export async function quizLoader({ params }) {
  await requiredAuth()
try {
  const data = await getQuiz(params.id)
  
  return { quiz: data.quiz, questions: data.questions, error:null }
} catch (error) {
  if (error.status === 400) {
    return { quiz: null, questions: null, error: error.message }
  }
  throw error
  }
}
export async function quizzesLoader() {
  await requiredAuth()

  const quizzes = await getQuizzes()
  return { quizzes }
}