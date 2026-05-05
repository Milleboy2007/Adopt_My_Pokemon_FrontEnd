import { getSinglePokemon } from "../services/api";
import { requiredAuth } from "../services/auth";

export async function formAdoptionLoader({params}) {
    await requiredAuth();
    const pokemon = await getSinglePokemon(params.id);
    return pokemon;
}