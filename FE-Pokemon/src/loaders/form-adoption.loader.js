import { requiredAuth } from "../services/auth";

export async function formAdoptionLoader({params}) {
    await requiredAuth();
    return {pokemon: params}
}