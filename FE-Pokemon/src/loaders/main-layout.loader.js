import { getCurrentUser } from "../services/api";

export default async function mainLayoutLoader(){
    try{
        const user = await getCurrentUser()
        return { user: user }
    } catch (error) {
        return { user: null }
    }
}