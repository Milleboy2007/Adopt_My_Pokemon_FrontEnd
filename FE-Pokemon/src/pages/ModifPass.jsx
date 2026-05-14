import { Form, useOutletContext } from "react-router-dom";


function ModifPass(){

    const { user } = useOutletContext();

    return (
        <div>
            <h1>Modification de mot de passe</h1>
            <Form method="patch">

                <input type="hidden" name="userId" value={user.id} />

                <input type="hidden" name="oldMdp" value={user.password} />


                <label>
                Votre ancien mot de passe
                <input name="oldMdpSaisi" type="text" placeholder="Entrez votre ancien mot de passe" />
                </label>
                <label>
                Nouveau mot de passe
                <input name="newMdp" type="text" placeholder="Entrez votre nouveau mot de passe" />
                </label>
                <label>
                Confirmez votre nouveau mot de passe
                <input name="newMdp2" type="text" placeholder="Entrez votre nouveau mot de passe" />
                </label>
                <button type="submit">Changer mon mot de passe</button>
            </Form>
        </div>
    )
} export default ModifPass