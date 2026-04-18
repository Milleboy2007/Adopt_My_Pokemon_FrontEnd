import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout, { mainLayoutLoader } from "./layouts/MainLayout"
import { requireAuth } from "./services/auth"
import Accueil from "./pages/Accueil"
import LogIn from "./pages/LogIn"
import SignIn from "./pages/SignIn"
import Compte from "./pages/Compte"
import Catalogue from "./pages/Catalogue"
import MyPokemon from "./pages/MyPokemon"
import Quiz from "./pages/Quiz"
import { quizzesLoader, quizLoader } from "./loaders/quiz.loader"
import QuizDetail from "./pages/QuizDetail"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainLayout />} loader={mainLayoutLoader}>
    <Route index element={<Accueil />} />
    <Route path="catalogue/*" element={<Catalogue />} />
    <Route path="signin/*" element={<SignIn />} />
    <Route path="login/*" element={<LogIn />} />
    <Route path="compte/*" element={<Compte />} loader={async () => await requireAuth()} />
    <Route path="myPokemons/*" element={<MyPokemon />} loader={async () => await requireAuth()} />
    <Route path="quiz/*" element={<Quiz />} loader={async () => await requireAuth(), quizzesLoader} />
    <Route path="quiz/:id" element={<QuizDetail />} loader={quizLoader} />
  </Route>
))

export default function App() {
  return <RouterProvider router={router} />
}