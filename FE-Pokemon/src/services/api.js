const BASE_URL = "http://localhost:3000"

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options
  })

  const data = await res.json().catch(() => ({}))

  if (!res.ok) {
    throw { message: data.message ?? "Request failed", status: res.status }
  }
  return data
}

export const getCurrentUser = async () => await request("/auth/whoami")
export const loginUser = async (creds) => await request("/auth/signin", { method: "POST", body: JSON.stringify(creds) })
export const registerUser = async (creds) => await request("/auth/signup", { method: "POST", body: JSON.stringify(creds) })
export const logoutUser = async () => await request("/auth/signout", { method: "POST" })

export const getQuiz = async (id) => await request(`/quiz/${id}`)
export const getQuizzes = async () => await request("/quiz")