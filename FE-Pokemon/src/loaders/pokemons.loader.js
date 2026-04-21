import { getPokemons } from "../services/api";

export default async function pokemonsLoader(){
    return await getPokemons();
}