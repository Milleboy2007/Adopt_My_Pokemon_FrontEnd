import { requiredAuth } from "../services/auth";
import { getSinglePokemon } from "../services/api";

export default async function formAdoptionLoader({ params, request }) {
    //verifier si utilisateur connecter
    await requiredAuth(request)

    //le pokemon selectionner
    const pokemon = await getSinglePokemon(params.id)

    //return pokemon selectionner
    return { pokemon }
}