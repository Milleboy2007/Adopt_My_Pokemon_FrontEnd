import './App.css'
import LogIn from './pages/LogIn'
import SignIn from './pages/SignIn'
import Accueil from './pages/Accueil'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Compte from './pages/Compte'
import Catalogue from './pages/Catalogue'
import MyPokemon from './pages/MyPokemon'
import Quiz from './components/Quiz/Quiz';
import MainLayout from './layouts/MainLayout/MainLayout'
import ProfileLayout from './layouts/ProfileLayout/ProfileLayout'
import pokemonsLoader from './loaders/pokemons.loader';
import loginAction from './actions/login.action';
import loginLoader from './loaders/login.loader';
import logoutAction from './actions/logout.action';
import mainLayoutLoader from './loaders/main-layout.loader';
import compteLoader from './loaders/compte.loader';
import authLoader from './loaders/auth.loader';
import QuizDetail from './components/Quiz/Details/QuizDetail'
import { quizzesLoader, quizLoader } from "./loaders/quiz.loader"
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import FAQ from './pages/FAQ';
import SatisfactionForm from './pages/satisfactionForm';

export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<MainLayout/>} loader={mainLayoutLoader}>

        <Route index element={<Accueil/>}/>
        <Route path="login" element={<LogIn/>} action={loginAction} loader={loginLoader}/>
        <Route path="logout" action={logoutAction}/>
        <Route path="signin" element={<SignIn/>}/>
        <Route path="catalogue" element={<Catalogue/>} loader={pokemonsLoader}/>
        <Route path="mission" element={<AboutUs/>}/>
        <Route path="equipe" element={<OurTeam/>}/>
        <Route path="FAQ" element={<FAQ/>}/>
        <Route path="satisf" element={<SatisfactionForm/>} loader={authLoader}/>
        <Route path="quiz" element={<Quiz/>} loader={quizzesLoader}/>
        <Route path="quiz/:id" element={<QuizDetail/>} loader={quizLoader}/>
        


        <Route path="/user" element={<ProfileLayout/>}>
          <Route index element={<Compte/>} loader={compteLoader}/>
          <Route path="myPokemons" element={<MyPokemon/>} loader={authLoader}/>
        </Route>
      </Route>
  ))

  return <RouterProvider router={router}/>
}