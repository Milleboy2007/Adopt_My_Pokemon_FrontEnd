import { useState } from "react";
import Header from "../components/General/Header";
import Footer from "../components/General/Footer";
import "./FormulaireAdoption.css";

function FormulaireAdoption({ pokemon }) {
  const [nomComplet, setNomComplet] = useState("");
  const [age, setAge] = useState(18);
  const [typeLogement, setTypeLogement] = useState("");
  const [motivationAdoption, setMotivationAdoption] = useState("");
  const [tempsDisponibleParJour, setTempsDisponibleParJour] = useState("");
  const [engagementLongTerme, setEngagementLongTerme] = useState("");
  const [aDejaEuPokemon, setADejaEuPokemon] = useState("");
  const [autresAnimauxMaison, setAutresAnimauxMaison] = useState("");
  const [gestionAdaptationPokemon, setGestionAdaptationPokemon] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    //connecter au backend
    alert("Demande envoyée avec succès !");
  }

  return (
    <div className="page">
      <Header />
      <main>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__grid">

            <div className="form__left">
              <div className="field">
                <label>Nom Complet:</label>
                <input
                  type="text"
                  value={nomComplet}
                  onChange={(e) => setNomComplet(e.target.value)}
                  required
                />
              </div>

              <div className="row">
                <div className="field">
                  <label>Age:</label>
                  <input
                    type="number"
                    min="18"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </div>

                <div className="field">
                  <label>Type Logement:</label>
                  <select value={typeLogement} onChange={(e) => setTypeLogement(e.target.value)} required>
                    <option value="">▼</option>
                    <option>2 1/2</option>
                    <option>3 1/2</option>
                    <option>4 1/2</option>
                    <option>5 1/2</option>
                  </select>
                </div>

                <div className="field">
                  <label>Motivation Adoption:</label>
                  <select value={motivationAdoption} onChange={(e) => setMotivationAdoption(e.target.value)} required>
                    <option value="">▼</option>
                    <option>Bonne</option>
                    <option>Moyenne</option>
                    <option>Mauvaise</option>
                  </select>
                </div>

                <div className="field">
                  <label>Temps dispo:</label>
                  <select value={tempsDisponibleParJour} onChange={(e) => setTempsDisponibleParJour(e.target.value)} required>
                    <option value="">▼</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>

                <div className="field">
                  <label>Engagement long terme:</label>
                  <select value={engagementLongTerme} onChange={(e) => setEngagementLongTerme(e.target.value)} required>
                    <option value="">▼</option>
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label>Déjà possédé un Pokémon:</label>
                <select value={aDejaEuPokemon} onChange={(e) => setADejaEuPokemon(e.target.value)} required>
                  <option value="">▼</option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
              </div>

              <div className="field">
                <label>Gestion et Adaptation:</label>
                <textarea
                  rows={4}
                  value={gestionAdaptationPokemon}
                  onChange={(e) => setGestionAdaptationPokemon(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form__right">
              <div className="chosen">
                <strong>Tu a Choisi:</strong>
                {pokemon ? (
                  <>
                    <span className="tag">{pokemon.nom}</span>
                    <div className="img-box">
                      {pokemon.img ? <img src={pokemon.img} alt={pokemon.nom} /> : "IMAGE"}
                    </div>
                    <button type="button" className="btn">Adopter</button>
                  </>
                ) : (
                  <p className="muted">Aucun Pokémon sélectionné</p>
                )}
              </div>

              <div className="field">
                <label>Animaux à la maison:</label>
                <select value={autresAnimauxMaison} onChange={(e) => setAutresAnimauxMaison(e.target.value)}>
                  <option value="">▼</option>
                  <option>chat</option>
                  <option>chien</option>
                  <option>hamster</option>
                  <option>autre</option>
                </select>
              </div>
            </div>
          </div>

          <div className="center">
            <button type="submit" className="btn btn--big">ENVOYER DEMANDE</button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default FormulaireAdoption;
