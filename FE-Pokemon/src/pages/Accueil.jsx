import "./accueil.css";
import Header from "../components/General/Header";
import Footer from "../components/General/Footer";
import Card from "../components/General/Acceuil/Card";

function Accueil({ setPage }) {
  return (
    <div className="accueil-page">
      <div className="accueil-content">
        <div className="text">
          <h1>Adoptez votre Pokemon</h1>
          <p>Trouvez votre compagnon ideal et commencez votre aventure.</p>
        </div>

        <div className="cards">
          <Card
            title="Catalogue"
            description="Voir les pokemon disponibles"
            buttonText="Voir"
            link="/catalogue"
          />

          <Card
            title="Quiz"
            description="Trouve ton pokemon ideal"
            buttonText="Commencer"
            link="/user/quiz"
          />

          <Card
            title="Compte"
            description="Voir ton profil"
            buttonText="Voir"
            link="/compte"
          />
        </div>
      </div>
    </div>
  );
}

export default Accueil;