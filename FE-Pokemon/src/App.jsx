import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LogIn from './pages/LogIn'
import SignIn from './pages/SignIn'
import Accueil from './pages/Accueil'
import Header from './components/General/Header'
import Footer from './components/General/Footer'
import { Routes, Route } from "react-router-dom";
import Compte from './pages/Compte'
import Catalogue from './pages/Catalogue'
import MyPokemon from './pages/MyPokemon'
import Quiz from './pages/Quiz'
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Accueil/>}/>
        <Route path="/catalogue/*" element={<Catalogue/>}/>
        <Route path="/compte/*" element={<Compte/>}/>
        <Route path="/myPokemons/*" element={<MyPokemon/>}/>
        <Route path="/signin/*" element={<SignIn/>}/>
        <Route path="/login/*" element={<LogIn/>}/>
        <Route path="/quiz/*" element={<Quiz/>}/>
        {/* <Route path="/secretCatalog/*" element={<></>}/> */}
      </Routes>
      <Footer/>
    </>
  )
}

export default App
