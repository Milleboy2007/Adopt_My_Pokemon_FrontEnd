import './satisfactionForm.css'
import { satisfactionForm } from '../services/api'
import { useState } from 'react'

function SatisfactionForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      satisfaction: formData.get('satisfaction'),
      comments: formData.get('comments')
    }
    await satisfactionForm(data)
    setSubmitted(true)
    e.target.reset()
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="satisfaction">
      <h1>Formulaire de Satisfaction</h1>

      {submitted && <div className="success-message">Merci pour votre retour !</div>}

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
        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}

export default SatisfactionForm