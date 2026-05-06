import "./SignInForms.css"
import {Link} from 'react-router-dom'
import { Form } from 'react-router-dom'

function SignInForms(){


    return (
        <Form method="post">
            <h1>Faire un nouveau compte🧢⚡️</h1>
            <label >
                Courriel
                <input name="email" type="text" id="email" placeholder="ex: bobby@gmail.com"/>
            </label>
            <label>
                Mot de passe
                <input name="password" type="password"  id="pass" placeholder="Password"/>
            </label>
            <button type="submit">Créer</button>
            <p>
                Vous avez déjà un compte? <Link to="/login">Se connecter</Link>
            </p>
        </Form>
    )
} export default SignInForms