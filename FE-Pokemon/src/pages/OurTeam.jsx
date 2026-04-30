import './ourTeam.css'
import example from '../assets/Profile-PNG-File.png'
import diego from '../assets/diego.jpg'
import kyra from '../assets/kyra.jpg'
import nathan from '../assets/nathan.jpg'
import angel from '../assets/angel.jpg'
function OurTeam() {
  return (
    <div className="our-team">
      <h1>Notre Équipe</h1>

      <div className="team-grid">
        <div className="team-member">
          <img src={kyra} alt="Team Member 1" />
          <h3>Kyra Valiquette</h3>
          <p>Développeur</p>
        </div>

        <div className="team-member">
          <img src={angel} alt="Team Member 2" />
          <h3>Angel Alejandro Montes-Galvez</h3>
          <p>Développeur</p>
        </div>

        <div className="team-member">
          <img src={nathan} alt="Team Member 3" />
          <h3>Nathan Lussier</h3>
          <p>Développeur</p>
        </div>

        <div className="team-member">
          <img src={diego} alt="Team Member 4" />
          <h3>Diego Fanara</h3>
          <p>Développeur</p>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;