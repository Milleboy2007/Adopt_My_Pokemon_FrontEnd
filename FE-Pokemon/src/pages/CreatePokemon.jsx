import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { createPokemon } from '../services/api';
import './createPokemon.css';

const TYPES = [
  'normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting',
  'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost',
  'dragon', 'dark', 'steel', 'fairy'
];

export default function CreatePokemon() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nom: '',
    img: '',
    grandeur: '', 
    poids: '',    
    prix: '',     
    niveau: 1,    
    type: []      
  });

  const [imageMode, setImageMode] = useState('url');
  const [fileName, setFileName] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setMessage({ type: 'error', text: 'Veuillez sélectionner un fichier image valide.' });
      return;
    }

    setFileName(file.name);
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setFormData(prev => ({
        ...prev,
        img: reader.result 
      }));
      setMessage({ type: '', text: '' });
    };

    reader.onerror = () => {
      setMessage({ type: 'error', text: 'Erreur lors de la lecture du fichier.' });
    };

    reader.readAsDataURL(file);
  };

  const handleModeSwitch = (mode) => {
    setImageMode(mode);
    setFileName('');
    setFormData(prev => ({ ...prev, img: '' }));
  };

  const handleTypeToggle = (typeStr) => {
    setFormData(prev => {
      const exists = prev.type.includes(typeStr);
      if (exists) {
        return { ...prev, type: prev.type.filter(t => t !== typeStr) };
      } else {
        return { ...prev, type: [...prev.type, typeStr] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (formData.type.length === 0) {
      setMessage({ type: 'error', text: 'Veuillez sélectionner au moins un type.' });
      return;
    }

    if (!formData.img) {
      setMessage({ type: 'error', text: 'Veuillez fournir une image (URL ou Fichier).' });
      return;
    }

    setIsLoading(true);

    try {
      const newPoke = {
        ...formData,
        nom: formData.nom.trim().toLowerCase(),
        img: formData.img.trim(),
        grandeur: parseFloat(formData.grandeur) || 0,
        poids: parseFloat(formData.poids) || 0,
        prix: parseInt(formData.prix) || 0,
        niveau: parseInt(formData.niveau) || 1,
      };

      await createPokemon(newPoke);
      
      setMessage({ type: 'success', text: `Le Pokémon ${newPoke.nom} a été créé avec succès !` });
      
      setFormData({
        nom: '', img: '', grandeur: '', poids: '', prix: '', niveau: 1, type: []
      });
      setFileName('');

      setTimeout(() => navigate('/catalogue'), 2000);

    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.message || "Une erreur est survenue lors de la création." 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-form-wrapper">
      <div className="admin-form-container">
        
        <div className="form-header">
          <h1>Créer un nouveau Pokémon</h1>
          <p>Ajout manuel d'un Pokémon au catalogue</p>
        </div>

        {message.text && (
          <div className={`alert-msg alert-${message.type}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="poke-form">
          
          <div className="form-group">
            <label htmlFor="nom">Nom du Pokémon:</label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              placeholder="ex: pikachu"
              value={formData.nom}
              onChange={handleChange}
            />
          </div>

          <div className="form-group image-section">
            <label>Image du Pokémon:</label>
            
            <div className="image-tabs">
              <button
                type="button"
                className={`tab-btn ${imageMode === 'url' ? 'active' : ''}`}
                onClick={() => handleModeSwitch('url')}
              >
                Lien URL
              </button>
              <button
                type="button"
                className={`tab-btn ${imageMode === 'file' ? 'active' : ''}`}
                onClick={() => handleModeSwitch('file')}
              >
                Image de l'ordinateur
              </button>
            </div>

            {imageMode === 'url' ? (
              <input
                type="url"
                id="img"
                name="img"
                placeholder="https://.../image.png"
                value={formData.img}
                onChange={handleChange}
                required={imageMode === 'url'}
              />
            ) : (
              <div className="file-drop-area">
                <input
                  type="file"
                  id="img-file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required={imageMode === 'file' && !formData.img}
                />
                <label htmlFor="img-file" className="file-custom-label">
                  {fileName ? `📁 ${fileName}` : 'Choisir une image locale...'}
                </label>
              </div>
            )}

            {formData.img && (
              <div className="image-preview">
                <span>Aperçu :</span>
                <img 
                  src={formData.img} 
                  alt="Aperçu du Pokémon" 
                  onError={(e) => e.target.style.display='none'} 
                />
              </div>
            )}
          </div>

          <div className="form-row">
            <div className="form-group col">
              <label htmlFor="grandeur">Taille (en dm):</label>
              <input
                type="number"
                step="0.1"
                min="0"
                id="grandeur"
                name="grandeur"
                required
                placeholder="ex: 4"
                value={formData.grandeur}
                onChange={handleChange}
              />
            </div>

            <div className="form-group col">
              <label htmlFor="poids">Poids (en hg):</label>
              <input
                type="number"
                step="0.1"
                min="0"
                id="poids"
                name="poids"
                required
                placeholder="ex: 60"
                value={formData.poids}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col">
              <label htmlFor="prix">Prix (Crédits):</label>
              <input
                type="number"
                min="0"
                id="prix"
                name="prix"
                required
                placeholder="ex: 500"
                value={formData.prix}
                onChange={handleChange}
              />
            </div>

            <div className="form-group col">
              <label htmlFor="niveau">Niveau de départ</label>
              <input
                type="number"
                min="1"
                max="100"
                id="niveau"
                name="niveau"
                value={formData.niveau}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Types (au moins 1 requis):</label>
            <div className="types-grid">
              {TYPES.map((t) => {
                const isSelected = formData.type.includes(t);
                return (
                  <button
                    type="button"
                    key={t}
                    onClick={() => handleTypeToggle(t)}
                    className={`type-toggle-btn ${isSelected ? `type-${t} active` : ''}`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="form-actions">
            <button 
              type="button" 
              className="btn-cancel" 
              onClick={() => {
                setFormData({
                    nom: '',
                    img: '',
                    grandeur: '', 
                    poids: '',    
                    prix: '',     
                    niveau: 1,    
                    type: []      
                    });
                setFileName('');
                setMessage({ type: '', text: '' });
              }}
              disabled={isLoading}
            >
              Annuler
            </button>
            <button 
              type="submit" 
              className="btn-submit"
              disabled={isLoading}
            >
              {isLoading ? 'Création en cours...' : 'Ajouter au Catalogue'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}