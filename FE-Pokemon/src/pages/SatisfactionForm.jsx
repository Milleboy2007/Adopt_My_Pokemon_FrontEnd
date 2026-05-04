import './satisfactionForm.css'
import { satisfactionForm } from '../services/api'
import { requiredAuth } from '../services/auth';

function SatisfactionForm() {

const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      satisfaction: formData.get('satisfaction'),
      comments: formData.get('comments')
    };
    if(requiredAuth()) {
      await satisfactionForm(data);
    }
  };
  return (
    <div className="satisfaction">
      <h1>Formulaire de Satisfaction</h1>

      <form className="satisfaction-form" onSubmit={handleSubmit}>

        <label>
          Votre nom (optionnel)
          <input name="name" type="text" placeholder="Entrez votre nom" />
        </label>

        <label>
          Votre niveau de satisfaction
          <select name="satisfaction" required>
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
          <textarea name="comments" placeholder="Dites‑nous ce que vous pensez..." rows="5"></textarea>
        </label>

        <button type="submit" >Envoyer</button>

      </form>
    </div>
  );
}

export default SatisfactionForm;
