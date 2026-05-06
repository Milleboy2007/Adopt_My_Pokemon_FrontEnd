import "./compte.css";
import { useOutletContext, Link } from "react-router-dom";
import pencil from '../assets/pencil.png'

function Compte() {


  const { user } = useOutletContext();


  return (
    <div className="account-page">
      <h1>Mon compte</h1>

      <div className="account-grid">
        
        <div className="account-card">
          <h3>Courriel</h3>
          <p>{user?.email}</p>
        </div>

        <div className="account-card">
          <h3>Mot de passe</h3>
          <p>************<Link to="/user/modifPass"><img src={pencil} alt="modifier"/></Link></p>
        </div>

        <div className="account-card">
          <h3>Nombre de pokémons adoptés</h3>
          <p>{user?.pokemons?.length ?? 0}</p>
        </div>

        <div className="account-card">
          <h3>Interactions</h3>
          <p>{user?.interactions?.length ?? 0}</p>
        </div>

        <div className="account-card">
          <h3>Formulaires rempli</h3>
          <p>{user?.forms?.length ?? 0}</p>
        </div>

        <div className="account-card highlight">
          <h3>PokeCredits</h3>
          <p>{user.pokecred} 💰</p>
        </div>

      </div>
    </div>
  );
}

export default Compte;
