import './CoreConceptsSection.css';

import Section from '../UI/Section/Section';
import CoreConceptCard from './CoreConceptCard';

export default function CoreConceptsSection({ items }) {
  return (
    <Section id='core-concepts-section' title='Core Concepts'>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.title}>
              <CoreConceptCard concept={item} />
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
