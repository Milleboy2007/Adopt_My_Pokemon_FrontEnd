import { requiredAuth } from "../services/auth";

export default async function authLoader({request}) {
    return await requiredAuth(request)
}