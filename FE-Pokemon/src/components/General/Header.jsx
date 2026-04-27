import "./Header.css"
import { Form, Link } from "react-router-dom";
import pokeball from '../../assets/pokeball.png'
function Header({user}){

    return (
        <nav className="navbar1">
            <p>
                <img src={pokeball} alt="AdoptLogo"/>
                Poké Adopt
            </p>
        <ul>
            <li>
                <Link to="/">Accueil</Link>
            </li>
            <li>
                <Link to="/catalogue">Catalogue</Link>
            </li>
            <li>
                <Link to="/quiz">Quiz</Link>
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