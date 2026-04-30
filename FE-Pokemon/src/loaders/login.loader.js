import { getCurrentUser } from "../services/api";

export default async function loginLoader(){
    try{
        const user = await getCurrentUser()
        return redirect("/user")
    } catch(error){
        return
    }
}