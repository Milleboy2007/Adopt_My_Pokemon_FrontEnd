import "./Footer.css"
import discordLogo from '../../assets/discord-color-icon.webp';
import instagramLogo from '../../assets/instagram_icon.png'
function Footer(){
    return (
        <div className="footer">
            <div className="links">
                <div>
                    <h2>À propos</h2>
                    <p>Notre mission</p>
                    <p>Notre équipe</p>
                </div>
                <div>
                    <h2>Contactez-nous</h2>
                    <p>FAQ</p>
                    <p>Satisfaction</p>
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