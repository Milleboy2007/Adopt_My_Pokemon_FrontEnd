import "./LogInForms.css"
import {Form, Link, useActionData} from 'react-router-dom'

function LogInForms(){


    return (
        <Form
            method="post"
        >
            <h1>Connectez-vous à votre compte🧢⚡️</h1>
            <label >
                Courriel
                <input name="email" type="text" id="email" placeholder="ex: bobby@gmail.com"/>
            </label>
            <label>
                Mot de passe
                <input name="password" type="password"  id="password" placeholder="Password"/>
            </label>
            <button type="submit">Log in</button>
            <p>
                Pas de compte? <Link to="/signin">En créer un</Link>
            </p>
        </Form>
    )
} export default LogInForms