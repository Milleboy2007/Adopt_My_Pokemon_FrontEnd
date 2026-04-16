import "./Header.css"
import { Form, Link } from "react-router-dom";
function Header({user}){

    return (
        <nav className="navbar1">
        <ul>
            <li>
                <Link to="/">Accueil</Link>
            </li>
            <li>
                <Link to="/quiz">Do a quiz</Link>
            </li>
            <li>
                <Link to="/catalogue">Voir le catalogue</Link>
            </li>
            <li>
                <Link to={user ? "/host" : "/login"}>{user ? user.name : "Login"}</Link>
            </li>
            <li>
                <Link to="/user">{user}</Link>
            </li>
            {
                user &&
                <Form method="POST" action="/logout">
                <button>Logout</button>
                </Form>
            }
            
            
        </ul>
        </nav>
    )
} export default Header