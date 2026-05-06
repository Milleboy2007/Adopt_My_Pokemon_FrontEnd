import { redirect } from "react-router-dom";
import { updateUser } from "/src/services/api";

export default async function modifPassAction({ request }) {
  const formData = await request.formData();

  const creds = {
    id: formData.get('userId'),
    oldPassEntered: formData.get('oldMdpSaisi'),
    newPass: formData.get('newMdp'),
    newPass2: formData.get('newMdp2'),
  };

  if (creds.newPass != creds.newPass2){
    alert("Veuillez entrer le même mot de passe deux fois.");
    return "Veuillez entrer le même mot de passe deux fois.";
  }
  if(creds.newPass == creds.oldPassEntered){
    alert("Veuillez entrez un mot de passe différent de votre ancien.")
    return "Veuillez entrez un mot de passe différent de votre ancien.";
  }

  try {
    await updateUser(creds.id, {
    password: creds.newPass,
    oldPassword: creds.oldPassEntered
    });
    return redirect("/user");
  } catch (error) {
    alert(error.message || "Changement failed.");
  }
}