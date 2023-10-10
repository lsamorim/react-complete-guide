import './Concepts.css';

import ConceptCard from './ConceptCard';

function Concepts({ items }) {
  return (
    <ul id='concepts'>
      {items.map((item) => {
        return (
          <li key={item.title}>
            <ConceptCard concept={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default Concepts;
