import { requiredAuth } from "../services/auth";

export default async function authLoader() {
    await requiredAuth()
}