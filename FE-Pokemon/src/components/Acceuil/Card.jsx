import "./Card.css";

function Card({ title, description, image, onClick, buttonText }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} />}

      <h2>{title}</h2>
      <p>{description}</p>

      {buttonText && (
        <button onClick={onClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default Card;