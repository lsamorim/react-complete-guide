import "./ConceptCard.css";

import Card from "../UI/Card";

function ConceptCard({ concept }) {
  return (
    <Card className="concept">
      <img src={concept.image} alt={concept.title} />
      <h2>{concept.title}</h2>
      <p>{concept.description}</p>
    </Card>
  );
}

export default ConceptCard;
