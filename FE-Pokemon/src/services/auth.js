import { redirect } from "react-router-dom"
import { getCurrentUser } from "./api"

export async function requireAuth() {
  try {
    return await getCurrentUser()
  } catch {
    throw redirect("/login")
  }
}