// API URL
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"

// Fonction "squelette" pour faire des requêtes à l'API
async function request(path, options = {}) {

  const res = await fetch(`${BASE_URL}${path}`, {

    credentials: "include", // Inclure les cookies dans la requête (authentification)
    headers: {
      "Content-Type": "application/json",
    },
    ...options
  })

  // Tenter de parser la réponse en JSON, ou retourner un objet vide si ça échoue
  const data = await res.json().catch(() => ({}))

  // Si la réponse n'est pas OK, on rejette la promesse avec un objet d'erreur
  if (!res.ok) {
    throw {
      message: data.message ?? "Request failed",
      statusText: res.statusText,
      status: res.status
    }
  }
  return data
}

// Requêtes GET
export const getPokemons = async () => await request("/pokemons")
export const getSinglePokemon = async (id) => await request(`/pokemons/${id}`)
export const getUserPokemons = async (userId) => await request(`/users/${userId}/pokemons`)
export const getMyPokemon = async (id) => await request(`/pokemons/MyPokemons/${id}`)
export const getQuiz = async (id) => await request(`/quiz/${id}`)
export const getQuizzes = async () => await request(`/quiz`)

// Requêtes GET Adoption
export const getPendingAdoptions = async () => await request("/adoptions/pending")
export const getApprovedAdoptions = async () => await request("/adoptions/approve")
export const getRejectedAdoptions = async () => await request("/adoptions/reject")

// PUT avec id - pas de besoin de rejection reason pour approve
export const approveAdoption = async (id) => await request(`/adoptions/${id}/approve`, {
    method: "PUT"
})

//PUT avec id + rejection reason
export const rejectAdoption = async (id, reason) => await request(`/adoptions/${id}/reject`, {
    method: "PUT",
    body: JSON.stringify({ reason })
})

// POST tout le formulaire dans body
export const createFormulaire = async (data) => await request("/forms/create", {
    method: "POST",
    body: JSON.stringify(data)
})

//POST adoption avec pokemonId + formulaireId dans body
export const createAdoption = async (data) => await request("/adoptions/create", {
    method: "POST",
    body: JSON.stringify(data)
})

// Requêtes AUTH
export const loginUser = async (creds) => (
  await request("/auth/signin", {
    method: "POST",
    body: JSON.stringify(creds)
  }))

export const registerUser = async (creds) => (
  await request("/auth/signup", {
    method: "POST",
    body: JSON.stringify(creds)
  }))


export const getCurrentUser = async () => {
  return await request("/auth/whoami")
}

export const logoutUser = async () => {
  return await request("/auth/signout", {
    method: "POST"
  })
}

export const updateUser = async (id, creds) => {
  return await request(`/auth/update/${id}`, {
    method: "PATCH",
    body: JSON.stringify(creds)
  });
};

export const changePokePseudo = async (id, newPseudo) => {
  return await request(`/pokemons/pseudoChange/${id}/${newPseudo}`, {
    method: "POST"
  })
}

export const resetPokePseudo = async (id) => {
  return await request(`/pokemons/resetPseudo/${id}`, {
    method: "POST"
  })
}

export const newInteraction = async (pokeId, action, userId) => {
  return await request(`/pokemons/${pokeId}/newInteraction`, {
    method: "POST",
    body: JSON.stringify({"userId": userId, "typeAction": action})
  })
}

// ---------------  Requêtes Creation de ressources ---------------------
export async function createPokemon(p) {
  return await request("/pokemons/create", {
    method: "POST",
    body: JSON.stringify(p)
  })
}

export async function satisfactionForm(s) {
  return await request("/satisfaction-form/createFormSatisfaction", {
    method: "POST",
    body: JSON.stringify(s)
  })
}

// Ajouter des crédits après un quiz (user connecté)
export async function addCredits(userId, credits, difficulte) {
  return await request(`/quiz/credits/add`, {
    method: "POST",
    body: JSON.stringify({ userId, credits, difficulte }) 
  })
}

// Supprimer des crédits (user connecté pour un achat)
export const suppCredits = async (credits) => 
  await request(`/users/me/suppCredits`, {
    method: "PATCH",
    body: JSON.stringify({ credits })
  })

// Ajouter des crédits manuellement (admin)
export const addCreditsAdmin = async (userId, credits) => 
  await request(`/users/${userId}/addCredits`, {
    method: "PATCH",
    body: JSON.stringify({ credits })
  })