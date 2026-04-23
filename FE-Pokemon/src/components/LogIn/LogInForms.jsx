import "./LogInForms.css"
import {Form, Link, useActionData} from 'react-router-dom'

function LogInForms(){

    const handleSubmit = (event) => {
        event.preventDefault();
        
        alert("The form has been submitted");
    }

    return (
        <Form
            method="POST"
        >
            <h1>Log into your account🧢⚡️</h1>
            <label >
                Email
                <input type="text" id="email" placeholder="ex: bobby@gmail.com"/>
            </label>
            <label>
                Password
                <input type="password"  id="password" placeholder="Password"/>
            </label>
            <button onClick={useActionData()}>Log in</button>
            <p>
                Don't have an account? <Link to="/signin">Create one</Link>
            </p>
        </Form>
    )
} export default LogInForms