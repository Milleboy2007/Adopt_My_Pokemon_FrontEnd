import { useState } from "react";
import Header from "../components/General/Header";
import Footer from "../components/General/Footer";
import "./GestionAdoptionAdmin.css";

const demandes = [
  {
    id: 1,
    idClient: 12,
    nomComplet: "Jean Dupont",
    age: 28,
    typeLogement: "4 1/2",
    motivationAdoption: "Bonne",
    tempsDisponibleParJour: "2",
    engagementLongTerme: "Oui",
    aDejaEuPokemon: true,
    autresAnimauxMaison: "chat",
    gestionAdaptationPokemon: "J'ai de l'expérience avec les animaux.",
    statut: "EN_ATTENTE",
  },
  {
    id: 2,
    idClient: 7,
    nomComplet: "Marie Tremblay",
    age: 34,
    typeLogement: "3 1/2",
    motivationAdoption: "Moyenne",
    tempsDisponibleParJour: "1",
    engagementLongTerme: "Oui",
    aDejaEuPokemon: false,
    autresAnimauxMaison: "chien",
    gestionAdaptationPokemon: "Je suis prête à apprendre.",
    statut: "APPROUVEE",
  },
];

function GestionAdoptionAdmin() {
  const [filtre, setFiltre] = useState("EN_ATTENTE");
  const [selected, setSelected] = useState(null);
  const [openId, setOpenId] = useState(null);
  const [raison, setRaison] = useState("");

  const filtered = demandes.filter((d) => d.statut === filtre);

  function toggleCard(e, id) {
    e.stopPropagation();
    setOpenId(openId === id ? null : id);
  }

  function handleAccepter() {
    //connecter au backend
    alert("Accepter demande", selected.id);
  }

  function handleRefuser() {
    //connecter au backend
    alert("Refuser demande", selected.id, "raison:", raison);
  }

  return (
    <div className="page">
      <Header />
      <main>
        <div className="layout">

          <div className="list">
            <div className="toolbar">
              <select value={filtre} onChange={(e) => { setFiltre(e.target.value); setSelected(null); }}>
                <option value="EN_ATTENTE">En attente</option>
                <option value="APPROUVEE">Acceptées</option>
                <option value="REFUSEE">Refusées</option>
              </select>
              <span>{filtered.length} demande{filtered.length !== 1 ? "s" : ""}</span>
            </div>

            <h2 className="list-title">Demande Adoption</h2>

            {filtered.length === 0 && (
              <p className="empty">Aucune demande dans cette catégorie.</p>
            )}

            {filtered.map((d) => (
              <div
                key={d.id}
                className={`card ${selected?.id === d.id ? "card--active" : ""}`}
                onClick={() => setSelected(d)}
              >
                <div className="card__head" onClick={(e) => toggleCard(e, d.id)}>
                  <span className="card__id">#{d.id}</span>
                  <span className="card__name">{d.nomComplet}</span>
                  <span>{openId === d.id ? "▲" : "▼"}</span>
                </div>

                {openId === d.id && (
                  <div className="card__body">
                    <p><b>idClient:</b> {d.idClient}</p>
                    <p><b>Âge:</b> {d.age}</p>
                    <p><b>Logement:</b> {d.typeLogement}</p>
                    <p><b>Motivation:</b> {d.motivationAdoption}</p>
                    <p><b>Temps dispo:</b> {d.tempsDisponibleParJour}h/j</p>
                    <p><b>Engagement:</b> {d.engagementLongTerme}</p>
                    <p><b>Déjà eu Pokémon:</b> {d.aDejaEuPokemon ? "Oui" : "Non"}</p>
                    <p><b>Animaux:</b> {d.autresAnimauxMaison || "—"}</p>
                    <p><b>Gestion:</b> {d.gestionAdaptationPokemon}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="detail">
            {selected ? (
              <>
                <p className="detail__row"><b>id:</b> {selected.id}</p>
                <p className="detail__row"><b>idClient:</b> {selected.idClient}</p>
                <p className="detail__row"><b>nomComplet:</b> {selected.nomComplet}</p>
                <p className="detail__row"><b>age:</b> {selected.age}</p>
                <p className="detail__row"><b>aDejaEuPokemon:</b> {selected.aDejaEuPokemon ? "Oui" : "Non"}</p>
                <p className="detail__row"><b>autresAnimauxMaison:</b> {selected.autresAnimauxMaison || "—"}</p>
                <p className="detail__row"><b>MotivationAdoption:</b> {selected.motivationAdoption}</p>
                <p className="detail__row"><b>tempsDisponibleParJour:</b> {selected.tempsDisponibleParJour}h</p>
                <p className="detail__row"><b>engagementLongTerme:</b> {selected.engagementLongTerme}</p>

                <div className="detail__row">
                  <b>gestionAdaptationPokemon:</b>
                  <textarea className="ta" readOnly value={selected.gestionAdaptationPokemon} />
                </div>

                {filtre === "EN_ATTENTE" && (
                  <div className="actions">
                    <button className="btn btn--green" onClick={handleAccepter}>Accepter</button>
                    <button className="btn btn--red" onClick={handleRefuser}>Decline</button>
                  </div>
                )}

                <div className="detail__row">
                  <b>rejectionReason:</b>
                  <textarea
                    className="ta"
                    value={raison}
                    onChange={(e) => setRaison(e.target.value)}
                    disabled={filtre !== "EN_ATTENTE"}
                  />
                </div>
              </>
            ) : (
              <p className="muted">Sélectionnez une demande pour voir les détails.</p>
            )}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default GestionAdoptionAdmin;
