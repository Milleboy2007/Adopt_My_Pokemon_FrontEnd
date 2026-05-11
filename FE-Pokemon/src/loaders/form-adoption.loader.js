import { getSinglePokemon } from "../services/api";
import { requiredAuth } from "../services/auth";

export async function formAdoptionLoader({params, request}) {
    await requiredAuth(request);
    const pokemon = await getSinglePokemon(params.id);
    return pokemon;
}