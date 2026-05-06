import "./SignInForms.css"
import {Link} from 'react-router-dom'
import { Form } from 'react-router-dom'

function SignInForms(){


    return (
        <Form method="post">
            <h1>Make a new account🧢⚡️</h1>
            <label >
                Email
                <input name="email" type="text" id="email" placeholder="ex: bobby@gmail.com"/>
            </label>
            <label>
                Password
                <input name="password" type="password"  id="pass" placeholder="Password"/>
            </label>
            <button type="submit">Submit</button>
            <p>
                Already have an account? <Link to="/login">Log in</Link>
            </p>
        </Form>
    )
} export default SignInForms