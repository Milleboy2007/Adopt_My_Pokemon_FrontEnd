import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { approveAdoption, rejectAdoption } from "../services/api";
import "./GestionAdoptionAdmin.css";

function GestionAdoptionAdmin() {
  const { pending, approved, rejected } = useLoaderData();

  const [filtre, setFiltre] = useState("EN_ATTENTE");
  const [selected, setSelected] = useState(null);
  const [openId, setOpenId] = useState(null);
  const [raison, setRaison] = useState("");

  const demandes =
    filtre === "EN_ATTENTE" ? pending : filtre === "APPROUVEE" ? approved : rejected;

  function toggleCard(e, id) {
    e.stopPropagation();
    setOpenId(openId === id ? null : id);
  }

  async function handleAccepter() {
    await approveAdoption(selected.id);
    alert("Demande acceptée");
  }

  async function handleRefuser() {
    await rejectAdoption(selected.id, raison);
    alert("Demande refusée");
  }

  return (
    <div className="page">
      <main>
        <div className="layout">
          <div className="list">
            <div className="toolbar">
              <select
                value={filtre}
                onChange={(e) => {
                  setFiltre(e.target.value);
                  setSelected(null);
                }}
              >
                <option value="EN_ATTENTE">En attente</option>
                <option value="APPROUVEE">Acceptées</option>
                <option value="REFUSEE">Refusées</option>
              </select>
              <span>
                {demandes.length} demande{demandes.length !== 1 ? "s" : ""}
              </span>
            </div>

            <h2 className="list-title">Demande Adoption</h2>

            {demandes.length === 0 && (
              <p className="empty">Aucune demande dans cette catégorie.</p>
            )}
            
            {console.log(demandes)}

            {demandes.map((d) => (
              <div
                key={d.id}
                className={`card ${selected?.id === d.id ? "card--active" : ""}`}
                onClick={() => setSelected(d)}
              >
                <div
                  className="card__head"
                  onClick={(e) => toggleCard(e, d.id)}
                >
                  <span className="card__id">#{d.id}</span>
                  <span className="card__name">{d.nomComplet}</span>
                  <span>{openId === d.id ? "▲" : "▼"}</span>
                </div>

                {openId === d.id && (
                  <div className="card__body">
                    <p>
                      <b>idClient:</b> {d.formulaire.idClient}
                    </p>
                    <p>
                      <b>Âge:</b> {d.formulaire.age}
                    </p>
                    <p>
                      <b>Logement:</b> {d.formulaire.typeLogement}
                    </p>
                    <p>
                      <b>Motivation:</b> {d.formulaire.motivationAdoption}
                    </p>
                    <p>
                      <b>Temps dispo:</b> {d.formulaire.tempsDisponibleParJour}h/j
                    </p>
                    <p>
                      <b>Engagement:</b> {d.formulaire.engagementLongTerme}
                    </p>
                    <p>
                      <b>Déjà eu Pokémon:</b> {d.formulaire.aDejaEuPokemon ? "Oui" : "Non"}
                    </p>
                    <p>
                      <b>Animaux:</b> {d.formulaire.autresAnimauxMaison || "—"}
                    </p>
                    <p>
                      <b>Gestion:</b> {d.formulaire.gestionAdaptationPokemon}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="detail">
            {selected ? (
              <>
                <p className="detail__row">
                  <b>id:</b> {selected.formulaire.id}
                </p>
                <p className="detail__row">
                  <b>idClient:</b> {selected.formulaire.idClient}
                </p>
                <p className="detail__row">
                  <b>nomComplet:</b> {selected.formulaire.nomComplet}
                </p>
                <p className="detail__row">
                  <b>age:</b> {selected.formulaire.age}
                </p>
                <p className="detail__row">
                  <b>aDejaEuPokemon:</b>{" "}
                  {selected.formulaire.aDejaEuPokemon ? "Oui" : "Non"}
                </p>
                <p className="detail__row">
                  <b>autresAnimauxMaison:</b>{" "}
                  {selected.formulaire.autresAnimauxMaison || "—"}
                </p>
                <p className="detail__row">
                  <b>MotivationAdoption:</b> {selected.formulaire.motivationAdoption}
                </p>
                <p className="detail__row">
                  <b>tempsDisponibleParJour:</b>{" "}
                  {selected.formulaire.tempsDisponibleParJour}h
                </p>
                <p className="detail__row">
                  <b>engagementLongTerme:</b> {selected.formulaire.engagementLongTerme}
                </p>

                <div className="detail__row">
                  <b>gestionAdaptationPokemon:</b>
                  <textarea
                    className="ta"
                    readOnly
                    value={selected.formulaire.gestionAdaptationPokemon}
                  />
                </div>

                {filtre === "EN_ATTENTE" && (
                  <div className="actions">
                    <button className="btn btn--green" onClick={handleAccepter}>
                      Accepter
                    </button>
                    <button className="btn btn--red" onClick={handleRefuser}>
                      Decline
                    </button>
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
              <p className="muted">
                Selectionnez une demande pour voir les detail
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default GestionAdoptionAdmin;
