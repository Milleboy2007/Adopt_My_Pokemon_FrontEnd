import { getCurrentUser } from "../services/api";
import { redirect } from "react-router-dom";

export default async function loginLoader(){
    try{
        const user = await getCurrentUser()
        return redirect("/user")
    } catch(error){
        return 
    }
}