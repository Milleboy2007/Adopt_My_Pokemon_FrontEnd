import { getPokemons } from "../services/api";

export default async function pokemonsLoader(){
    try{
        const allPoke = await getPokemons();
        return allPoke
    }catch (e) {
        if (e.status === 404){
            return null
        }
    }
}