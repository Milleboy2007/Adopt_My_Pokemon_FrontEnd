import "./SignInForms.css"
import {Link, Form, useActionData} from 'react-router-dom'


function SignInForms(){
    const error = useActionData();

    return (
        <Form method="post">
            <h1>Faire un nouveau compte🧢⚡️</h1>
            {error && <p className="error-message">{error}</p>} {/* ✅ */}
            <label>
                Courriel
                <input name="email" type="text" placeholder="ex: bobby@gmail.com"/>
            </label>
            <label>
                Mot de passe
                <input name="password" type="password" placeholder="Password"/>
            </label>
            <button type="submit">Créer un compte</button>
            <p>Vous avez déjà un compte? <Link to="/login">Se connecter</Link></p>
        </Form>
    )
} export default SignInForms