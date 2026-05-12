import "./HeaderUser.css"
import { Link } from "react-router-dom";

function HeaderUser(){
    return (
        <nav className="navbar2">
        <ul>
            <li>
                <Link to="/user">Mon profile</Link>
            </li>
            <li>
                <Link to="/user/quiz">Quiz</Link>
            </li>
            <li>
                <Link to="/user/myPokemons">Mes Pokémons</Link>
            </li>
            
        </ul>
        </nav>
    )
} export default HeaderUser