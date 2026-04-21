import { Outlet, useLoaderData } from "react-router-dom"
import { getCurrentUser } from "../services/api"
import Header from "../components/General/Header"
import Footer from "../components/General/Footer"

export async function mainLayoutLoader() {
  try {
    const user = await getCurrentUser()
    return { user }
  } catch {
    return { user: null }
  }
}

export default function MainLayout() {
  const { user } = useLoaderData()

  return (
    <div>
      <Header user={user} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}