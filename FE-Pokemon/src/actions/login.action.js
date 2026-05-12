// actions/login.action.js
import { redirect } from "react-router-dom";
import { loginUser } from "/src/services/api";
import { getCurrentUser } from "../services/api";

export default async function loginAction({ request }) {
  // 1. On extrait les données du formulaire envoyé par le composant <Form>
  const formData = await request.formData();

  const creds = {
    email: formData.get('email'),    // Récupère la valeur de l'input name="email"
    password: formData.get('password'), // Récupère la valeur de l'input name="password"
  };

  // 2. On récupère l'URL de redirection (si l'utilisateur a été intercepté par un garde)
  // Sinon, on le renvoie à la racine "/" par défaut.
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/"

  try {
    // 3. Appel au service API (NestJS)
    await loginUser(creds)

    //Ont recupere l'utilisateur pour verifier son role
    const user = await getCurrentUser()

    //Si c'est un admin ou (permLvl >= 2), redirige vers gestion adoptions
    if(user.permLvl >= 2) {
      return redirect("/admin")
    }
    
    // 4. Succès : On redirige l'utilisateur vers sa destination
    return redirect("/user")
  } catch (error) {
    // 5. Échec : On "return" un message d'erreur au lieu de le "throw"
    // Ce message sera récupéré par le composant via useActionData()
    if (error.status === 404 || error.status === 400) {
      return "Courriel ou mot de passe est incorrect. Veuillez réessayer."
    }
    return "La connexion a échouée. Veuillez réessayer."
  }
};