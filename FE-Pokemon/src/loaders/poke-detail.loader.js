import { getSinglePokemon } from "../services/api";

export default async function pokeDetailLoader({params}) {
    return await getSinglePokemon(params.id);
}