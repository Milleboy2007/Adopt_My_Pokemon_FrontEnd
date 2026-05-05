import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import './pokemonDetail.css'

function PokemonDetail() {
    const  { pokemon } = useLoaderData();

    console.log(pokemon.type, typeof pokemon.type)
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
            <Link to="/catalogue" className="back-btn">← Retour</Link> 
            <Link to={`/adoption/${pokemon.id}`} className="adopt-btn">Adopter ce Pokémon !</Link>
             </div>
            </div>
          </div>
        </div>
    );

}

export default PokemonDetail