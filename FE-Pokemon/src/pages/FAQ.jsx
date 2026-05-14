import './FAQ.css'

function FAQ() {
  return (
    <div className="faq">
      <h1>FAQ</h1>

      <div className="faq-list">

        <div className="faq-card">
          <h3>Comment fonctionne Poké Adopt ?</h3>
          <p>
            Poké Adopt vous permet d’adopter et collectionner des Pokémon virtuels
            dans un environnement simple et amusant.
          </p>
        </div>

        <div className="faq-card">
          <h3>Est‑ce que le site est gratuit ?</h3>
          <p>
            Oui, toutes les fonctionnalités principales sont gratuites.
          </p>
        </div>

        <div className="faq-card">
          <h3>Comment contacter l’équipe ?</h3>
          <p>
            Vous pouvez nous écrire via la page Satisfaction ou sur nos réseaux sociaux.
          </p>
        </div>

        <div className="faq-card">
          <h3>Puis‑je proposer des idées ?</h3>
          <p>
            Bien sûr. Nous adorons recevoir des suggestions pour améliorer Poké Adopt.
          </p>
        </div>

      </div>
    </div>
  );
}

export default FAQ;
