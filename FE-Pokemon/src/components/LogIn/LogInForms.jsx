import "./LogInForms.css"
import {Form, Link, useActionData} from 'react-router-dom'

function LogInForms(){


    return (
        <Form
            method="post"
        >
            <h1>Log into your account🧢⚡️</h1>
            <label >
                Email
                <input name="email" type="text" id="email" placeholder="ex: bobby@gmail.com"/>
            </label>
            <label>
                Password
                <input name="password" type="password"  id="password" placeholder="Password"/>
            </label>
            <button type="submit">Log in</button>
            <p>
                Don't have an account? <Link to="/signin">Create one</Link>
            </p>
        </Form>
    )
} export default LogInForms