import { logoutUser } from "../services/api";




export default async function logoutAction() {
    try{
        await logoutUser()
        redirect("/")
    } catch(error){
        console.error(error)
        redirect("/")
    }
    
}