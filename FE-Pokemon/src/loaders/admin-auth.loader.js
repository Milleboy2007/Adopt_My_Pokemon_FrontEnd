import { redirect } from "react-router-dom";
import { getCurrentUser } from "../services/api";
import { requiredAuth } from "../services/auth";

export default async function adminAuthLoader({request}){
    const user = await requiredAuth(request)
    console.log(user)
    if(user.permLvl < 2){
        throw redirect('/')
    }
    return { user: user }
}