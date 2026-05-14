import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createQuiz } from '../services/api';
import './createQuiz.css';

const DIFFICULTES = ['EASY', 'MEDIUM', 'HARD'];

export default function CreateQuiz() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    titre: '',
    difficulte: '',
    recompenseCredits: '',
    nombreDeQuestions: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  function handleChange(e){
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  function handleDifficulteSelect(diffStr){
    setFormData(prev => ({
      ...prev,
      difficulte: diffStr
    }));
  };

  function handleReset(){
    setFormData({
      titre: '',
      difficulte: '',
      recompenseCredits: '',
      nombreDeQuestions: '',
    });
    setMessage({ type: '', text: '' });
  };

  async function handleSubmit(e){
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (!formData.difficulte) {
      setMessage({ type: 'error', text: 'Veuillez sélectionner un niveau de difficulté.' });
      return;
    }

    setIsLoading(true);

    try {
      const newQuiz = {
        titre: formData.titre.trim(),
        difficulte: formData.difficulte,
        recompenseCredits: parseFloat(formData.recompenseCredits) || 0,
        nombreDeQuestions: parseInt(formData.nombreDeQuestions, 10) || 0,
      };

      if (newQuiz.recompenseCredits <= 0 || newQuiz.nombreDeQuestions <= 0) {
        setMessage({ 
          type: 'error', 
          text: 'Les crédits de récompense et le nombre de questions doivent être supérieurs à 0.' 
        });
        setIsLoading(false);
        return;
      }

      await createQuiz(newQuiz);
      
      setMessage({ type: 'success', text: `Le Quiz "${newQuiz.titre}" a été créé avec succès !` });
      
      handleReset();

    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.message || "Une erreur est survenue lors de la création du quiz." 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-form-wrapper">
      <div className="admin-form-container">
        
        <div className="form-header">
          <h1>Créer un nouveau Quiz</h1>
          <p>Configuration d'un questionnaire et de ses récompenses</p>
        </div>

        {message.text && (
          <div className={`alert-msg alert-${message.type}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="quiz-form">
          
          <div className="form-group">
            <label htmlFor="titre">Titre du Quiz *</label>
            <input
              type="text"
              id="titre"
              name="titre"
              required
              placeholder="ex: Connaissances générales sur les Pokémon Feu"
              value={formData.titre}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group col">
              <label htmlFor="recompenseCredits">Récompense (Crédits) *</label>
              <input
                type="number"
                min="1"
                id="recompenseCredits"
                name="recompenseCredits"
                required
                placeholder="ex: 150"
                value={formData.recompenseCredits}
                onChange={handleChange}
              />
            </div>

            <div className="form-group col">
              <label htmlFor="nombreDeQuestions">Nombre de questions *</label>
              <input
                type="number"
                min="1"
                id="nombreDeQuestions"
                name="nombreDeQuestions"
                required
                placeholder="ex: 10"
                value={formData.nombreDeQuestions}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Niveau de difficulté *</label>
            <div className="difficulte-grid">
              {DIFFICULTES.map((d) => {
                const isSelected = formData.difficulte === d;
                return (
                  <button
                    type="button"
                    key={d}
                    onClick={() => handleDifficulteSelect(d)}
                    className={`diff-toggle-btn ${isSelected ? 'active' : ''}`}
                  >
                    {d}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="form-actions">
            <button 
              type="button" 
              className="btn-cancel" 
              onClick={handleReset} 
              disabled={isLoading}
            >
              Annuler
            </button>
            <button 
              type="submit" 
              className="btn-submit"
              disabled={isLoading}
            >
              {isLoading ? 'Création en cours...' : 'Ajouter le Quiz'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}