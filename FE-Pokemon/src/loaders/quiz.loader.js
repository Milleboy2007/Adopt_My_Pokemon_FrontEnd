import { getQuizzes, getQuiz } from "../services/api"
import { requiredAuth } from "../services/auth"

export async function quizLoader({ params, request }) {
  await requiredAuth(request)
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
export async function quizzesLoader({request}) {
  await requiredAuth(request)

  const quizzes = await getQuizzes()
  return { quizzes }
}