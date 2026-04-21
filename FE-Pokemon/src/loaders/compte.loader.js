import { requiredAuth } from "../services/auth";

export default async function compteLoader({request}) {
    const user = await requiredAuth(request)

    return {user:user}
}