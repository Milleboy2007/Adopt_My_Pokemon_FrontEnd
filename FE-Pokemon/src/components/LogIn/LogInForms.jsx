import "./LogInForms.css"

function LogInForms(){

    const handleSubmit = (event) => {
        event.preventDefault();
        
        alert("The form has been submitted");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Log into your account🧢⚡️</h1>
            <label >
                Email
                <input type="text" id="email" placeholder="ex: bobby@gmail.com"/>
            </label>
            <label>
                Password
                <input type="password"  id="pass" placeholder="Password"/>
            </label>
            <button type="submit">Submit</button>
            <a href="http://google.com" target="_blank">Don't have an account? Sign in</a>
        </form>
    )
} export default LogInForms