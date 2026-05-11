import { redirect } from "react-router-dom";
import { getCurrentUser } from "./api";

export async function requiredAuth(request){

    try{
        return await getCurrentUser()
    }catch(e){
        if(e.status != 401 && e.status != 403){
            throw e
        }
        // 1. On extrait l'URL de la page que l'utilisateur tentait d'ouvrir
        // (pathname récupère le chemin ex: "/adoption/5", et search récupère les filtres éventuels ex: "?trie=alpha")
        const url = new URL(request.url);
        const destinationOrigine = url.pathname + url.search;

        // 2. On déclenche la redirection en attachant le paramètre proprement encodé
        throw redirect(`/login?redirectTo=${encodeURIComponent(destinationOrigine)}`);
    }

}