import './CoreConceptsSection.css';

import CoreConceptCard from './CoreConceptCard';

export default function CoreConceptsSection({ items }) {
  return (
    <section id='core-concepts-section'>
      <h2>Core Concepts</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.title}>
              <CoreConceptCard concept={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
