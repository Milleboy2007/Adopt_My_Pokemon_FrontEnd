import './App.css'
import LogIn from './pages/LogIn'
import SignIn from './pages/SignIn'
import Accueil from './pages/Accueil'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Compte from './pages/Compte'
import Catalogue from './pages/Catalogue'
import MyPokemon from './pages/MyPokemon'
import Quiz from './pages/Quiz'
import MainLayout from './layouts/MainLayout/MainLayout'
import ProfileLayout from './layouts/ProfileLayout/ProfileLayout'
import pokemonsLoader from './loaders/pokemons.loader';
import loginAction from './actions/login.action';
import loginLoader from './loaders/login.loader';
import logoutAction from './actions/logout.action';
import mainLayoutLoader from './loaders/main-layout.loader';
function App() {

  const user = "kyra"

  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<MainLayout user={user} loader={mainLayoutLoader}/>}>

        <Route index element={<Accueil/>}/>
        <Route path="login" element={<LogIn/>} action={loginAction} loader={loginLoader}/>
        <Route path="logout" action={logoutAction}/>
        <Route path="signin" element={<SignIn/>}/>
        <Route path="catalogue" element={<Catalogue/>} loader={pokemonsLoader}/>
        <Route path="quiz" elements={<Quiz/>}/>

        <Route path="user/" element={<ProfileLayout/>}>
          <Route index element={<Compte/>}/>
          <Route path="myPokemons" element={<MyPokemon/>}/>
        </Route>
      </Route>
  ))

  return <RouterProvider router={router}/>
}

export default App
