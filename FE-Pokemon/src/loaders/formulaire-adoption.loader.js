import { requiredAuth } from "../services/auth";
import { getSinglePokemon } from "../services/api";

export default async function formAdoptionLoader({ params }) {
    //verifier utili connecter
    await requiredAuth()

    //le pokemon selectionner
    const pokemon = await getSinglePokemon(params.id)

    //return pokemon selectionner
    return { pokemon }
}