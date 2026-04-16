import "./Header.css"
import { Link } from "react-router-dom";
function Header(){
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
                <Link to="/signin">Signin</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/myPokemons">My pokemons</Link>
            </li>
            <li>
                <Link to="/compte">My Profile</Link>
            </li>
            
        </ul>
        </nav>
    )
} export default Header