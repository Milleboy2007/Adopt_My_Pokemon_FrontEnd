import './satisfactionForm.css'
function SatisfactionForm() {
  return (
    <div className="satisfaction">
      <h1>Formulaire de Satisfaction</h1>

      <form className="satisfaction-form">

        <label>
          Votre nom (optionnel)
          <input type="text" placeholder="Entrez votre nom" />
        </label>

        <label>
          Votre niveau de satisfaction
          <select required>
            <option value="">Choisissez une option</option>
            <option>Très satisfait</option>
            <option>Satisfait</option>
            <option>Neutre</option>
            <option>Insatisfait</option>
            <option>Très insatisfait</option>
          </select>
        </label>

        <label>
          Commentaires
          <textarea placeholder="Dites‑nous ce que vous pensez..." rows="5"></textarea>
        </label>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default SatisfactionForm;
