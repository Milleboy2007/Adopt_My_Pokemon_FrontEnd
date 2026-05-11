import { useLoaderData, useRouteLoaderData, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './pokemonDetail.css'

function PokemonDetail() {
    const  { pokemon } = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className="detail-page">
          <div className="detail-card">
            <img className="detail-image" src={pokemon.img} alt={pokemon.nom} />
            <div className="detail-info">
              <h1>{pokemon.nom.charAt(0).toUpperCase() + pokemon.nom.slice(1)}</h1>  
            <div className={"detail-types"}>
                {pokemon.type.map(type =>(
                <span className={`type-badge type-${type}`} key={type}>
                    {type}
                </span>
                ))}
            </div>
            <div className="detail-stats">
                <p><span>Taille :</span> {pokemon.grandeur * 10 } cm</p>
                <p><span>Poids :</span> {pokemon.poids / 10} kg</p>
                <p><span>Type :</span> {pokemon.type.join(', ')}</p>
                <p><span>Prix :</span> {pokemon.prix} pokécredits</p>
            </div>
            <p className="detail-description">
                {pokemon.description}
            </p>
            <div className="detail-buttons">
            <button onClick={() => {
                sessionStorage.setItem("keep_filters", "true")
                navigate(-1)
                }} className="back-btn" style={{cursor: 'pointer', border: 'none'}}>
                ← Retour
            </button>
            <Link to={`/adoption/${pokemon.id}`} className="adopt-btn">Adopter ce Pokémon !</Link>
             </div>
            </div>
          </div>
        </div>
    );

}

export default PokemonDetail