import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { createFormulaire, createAdoption } from "../services/api";
import "./FormulaireAdoption.css";
import Prix from "../components/catalogue/filtre/Prix";

function FormulaireAdoption() {
  const pokemon = useLoaderData()
  const navigate = useNavigate()

  const [nomComplet, setNomComplet] = useState("")
  const [age, setAge] = useState(18)
  const [typeLogement, setTypeLogement] = useState("")
  const [motivationAdoption, setMotivationAdoption] = useState("")
  const [tempsDisponibleParJour, setTempsDisponibleParJour] = useState("")
  const [engagementLongTerme, setEngagementLongTerme] = useState("")
  const [aDejaEuPokemon, setADejaEuPokemon] = useState("")
  const [autresAnimauxMaison, setAutresAnimauxMaison] = useState("")
  const [gestionAdaptationPokemon, setGestionAdaptationPokemon] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    try {
        // etape1: creer le formulaire
        const formulaire = await createFormulaire({
            nomComplet,
            age: parseInt(age),
            typeLogement,
            motivationAdoption,
            tempsDisponibleParJour,
            engagementLongTerme,
            aDejaEuPokemon: aDejaEuPokemon === "Oui",
            autresAnimauxMaison,
            gestionAdaptationPokemon,
            typePokemonSouhaite: pokemon.type,
        })

        // etape2: creer adoption
        await createAdoption({
            pokemonId: pokemon.id,
            formulaireId: formulaire.id
        })

        // etaep3: rediriger apre succes 
        navigate("/")

    } catch(error) {
        alert("Erreur lors de l'envoi de la demande")
    }
}

  return (
    <div className="page">
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
                  <label>Âge:</label>
                  <input
                    type="number"
                    min="18"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </div>

                <div className="field">
                  <label>Type de logement:</label>
                  <select value={typeLogement} onChange={(e) => setTypeLogement(e.target.value)} required>
                    <option value="">▼</option>
                    <option>Appartement</option>
                    <option>Petite Maison</option>
                    <option>Maison Familiale</option>
                    <option>Maison avec Grande Cour</option>
                    <option>Grande Maison avec Très Grande Cour</option>
                  </select>
                </div>

                <div className="field">
                  <label>Motivation d'adoption:</label>
                  <select value={motivationAdoption} onChange={(e) => setMotivationAdoption(e.target.value)} required>
                    <option value="">▼</option>
                    <option>Bonne</option>
                    <option>Moyenne</option>
                    <option>Mauvaise</option>
                  </select>
                </div>

                <div className="field">
                  <label>Temps disponible:</label>
                  <select value={tempsDisponibleParJour} onChange={(e) => setTempsDisponibleParJour(e.target.value)} required>
                    <option value="">▼</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>

                <div className="field">
                  <label>Engagement à long terme:</label>
                  <select value={engagementLongTerme} onChange={(e) => setEngagementLongTerme(e.target.value)} required>
                    <option value="">▼</option>
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label>Avez-vous déjà possédé un Pokémon:</label>
                <select value={aDejaEuPokemon} onChange={(e) => setADejaEuPokemon(e.target.value)} required>
                  <option value="">▼</option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
              </div>

              <div className="field">
                <label>Gestion et adaptation:</label>
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
                <strong>Vous avez choisi:</strong>
                {pokemon ? (
                  <>
                    <span className="tag">{pokemon.nom.charAt(0).toUpperCase() + pokemon.nom.slice(1)}</span>
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
                  <option>aucun</option>
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
    </div>
  );
}

export default FormulaireAdoption;
