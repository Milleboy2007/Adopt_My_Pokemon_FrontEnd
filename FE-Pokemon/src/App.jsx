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
import {pokemonsLoader, myPokemonLoader} from './loaders/pokemons.loader';
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
import signinAction from './actions/signin.action';
import FormulaireAdoption from './pages/FormulaireAdoption';
import { formAdoptionLoader } from './loaders/form-adoption.loader';
import ModifPass from './pages/modifPass';
import modifPassAction from './actions/modifPass.action';
import GestionAdoptionAdmin from './pages/GestionAdoptionAdmin';
import gestionAdoptionLoader from './loaders/gestion-adoption.loader';
import PokemonDetail from './components/catalogue/details/PokemonDetail';
import pokeDetailLoader from './loaders/poke-detail.loader';


export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<MainLayout/>} loader={mainLayoutLoader}>

        <Route index element={<Accueil/>}/>
        <Route path="login" element={<LogIn/>} action={loginAction} loader={loginLoader}/>
        <Route path="logout" action={logoutAction} />
        <Route path="signin" element={<SignIn/>} action={signinAction}/>
        <Route path="catalogue" element={<Catalogue/>} loader={pokemonsLoader}/>
        <Route path="catalogue/:id" element={<PokemonDetail/>} loader={pokeDetailLoader}/> 
        <Route path="mission" element={<AboutUs/>}/>
        <Route path="equipe" element={<OurTeam/>}/>
        <Route path="FAQ" element={<FAQ/>}/>
        <Route path="satisf" element={<SatisfactionForm/>} loader={authLoader}/>
        <Route path="adoption/:id" element={<FormulaireAdoption/>} loader={formAdoptionLoader}/>
        <Route path="admin/adoptions" element={<GestionAdoptionAdmin/>} loader={gestionAdoptionLoader}/>

        


        <Route path="/user" element={<ProfileLayout/>}>
          <Route index element={<Compte/>} loader={compteLoader}/>
          <Route path="myPokemons" element={<MyPokemon/>} loader={myPokemonLoader}/>
          <Route path="modifPass" element={<ModifPass/>} action={modifPassAction}/>
          <Route path="quiz" element={<Quiz/>} loader={quizzesLoader}/>
          <Route path="quiz/:id" element={<QuizDetail/>} loader={quizLoader}/>
        </Route>
      </Route>
  ))

  return <RouterProvider router={router}/>
}