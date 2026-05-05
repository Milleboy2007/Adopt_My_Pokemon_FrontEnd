import { redirect } from "react-router-dom";
import { registerUser } from "/src/services/api";
import logoutAction from "./logout.action";
import { logoutUser } from "../services/api";

export default async function signinAction({ request }) {
  const formData = await request.formData();

  const creds = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  try {
    await registerUser(creds); 
    await logoutUser()
    return redirect('/login'); 
  } catch (error) {
    if (error.status === 400) {
      return "Email already exists. Please try again.";
    }
    return "Sign up failed. Please try again.";
  }
}