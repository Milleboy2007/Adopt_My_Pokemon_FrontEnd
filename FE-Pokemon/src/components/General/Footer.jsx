import "./Footer.css"
import {Link} from "react-router-dom";
import discordLogo from '../../assets/discord-color-icon.webp';
import instagramLogo from '../../assets/instagram_icon.png'
function Footer(){
    return (
        <div className="footer">
            <div className="links">
                <div>
                    <h2>À propos</h2>
                    <Link to="/mission">Notre Mission</Link>
                    <Link to="/equipe">Notre équipe</Link>
                </div>
                <div>
                    <h2>Contactez-nous</h2>
                    <Link to="/FAQ">FAQ</Link>
                    <Link to="/satisf">Satisfaction</Link>
                </div>
            </div>
            <div className="socials">
                <a href="https://discord.com/" target="_blank">
                    <img src={discordLogo} alt="Notre discord"/>
                </a>
                <a href="https://instagram.com/" target="_blank">
                    <img src={instagramLogo} alt="Notre instagram"/>
                </a>
            </div>
        </div>
    )
} export default Footer