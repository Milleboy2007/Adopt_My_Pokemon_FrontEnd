import { redirect } from "react-router-dom";
import { getCurrentUser } from "./api";

export async function requiredAuth(request){

    try{
        return await getCurrentUser()
    }catch(e){
        if(e.status != 401 && e.status != 403){
            throw e
        }

        throw redirect("/login")
    }

}