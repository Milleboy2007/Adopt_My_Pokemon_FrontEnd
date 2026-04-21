import "./Card.css";
import { Link } from "react-router-dom";

function Card({ title, description, image, link, buttonText }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} />}

      <h2>{title}</h2>
      <p>{description}</p>

      {buttonText && (
        <Link to={link}>
          <button>
            {buttonText}
          </button>
        </Link>
      )}
    </div>
  );
}

export default Card;