import "./SignInForms.css"
import {Link} from 'react-router-dom'

function SignInForms(){

    const handleSubmit = (event) => {
        event.preventDefault();
        
        alert("The form has been submitted");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Make a new account🧢⚡️</h1>
            <label >
                Email
                <input type="text" id="email" placeholder="ex: bobby@gmail.com"/>
            </label>
            <label>
                Password
                <input type="password"  id="pass" placeholder="Password"/>
            </label>
            <button type="submit">Submit</button>
            <p>
                Already have an account? <Link to="/login">Log in</Link>
            </p>
        </form>
    )
} export default SignInForms