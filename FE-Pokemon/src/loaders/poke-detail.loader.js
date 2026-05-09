import { getSinglePokemon } from "../services/api";

export default async function pokeDetailLoader({params}) {
    const pokemon = await getSinglePokemon(params.id);
    return { pokemon };
}