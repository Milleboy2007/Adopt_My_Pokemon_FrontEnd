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
                <Link to={user ? "/user" : "/login"}>{user ? "Mon compte" : "Se connecter"}</Link>
            </li>
            {
                user &&
                <li>
                    <Form method="POST" action="/logout" className="logout">
                        <button className="logout-btn">Se déconnecter</button>
                    </Form>
                </li>
            }
            
            
        </ul>
        </nav>
    )
} export default Header