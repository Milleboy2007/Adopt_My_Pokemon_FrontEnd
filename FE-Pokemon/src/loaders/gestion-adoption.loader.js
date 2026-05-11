import { requiredAuth } from "../services/auth";
import { getPendingAdoptions, getApprovedAdoptions, getRejectedAdoptions } from "../services/api";

export default async function gestionAdoptionLoader({ request }) {
    //assurer utilisateur est connecter
    await requiredAuth(request)

    //appel des 3 liste
    const pending = await getPendingAdoptions()
    const approved = await getApprovedAdoptions()
    const rejected = await getRejectedAdoptions()

    //retourne les 3 liste
    return { pending, approved, rejected }
}