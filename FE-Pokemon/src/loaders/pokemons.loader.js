import { getMyPokemon, getPokemons, getUserPokemons } from "../services/api";
import { requiredAuth } from "../services/auth";

export async function pokemonsLoader(){
    try{
        const allPoke = await getPokemons();
        return allPoke
    }catch (e) {
        if (e.status === 404){
            return null
        }
    }
}

export async function myPokemonLoader({request}){
    const user = await requiredAuth(request)
    const pokemons = await getMyPokemon(user.id)
    return {"user": user, "pokemons": pokemons}
}