import './CoreConceptCard.css';

import Card from '../UI/Card';

export default function CoreConceptCard({ concept }) {
  return (
    <Card className='core-concept-card'>
      <img src={concept.image} alt={concept.title} />
      <h3>{concept.title}</h3>
      <p>{concept.description}</p>
    </Card>
  );
}
