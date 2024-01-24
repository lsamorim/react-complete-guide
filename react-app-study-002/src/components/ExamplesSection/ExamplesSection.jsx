import './ExamplesSection.css';

import { useState } from 'react';

import Section from '../UI/Section/Section';
import TabButton from '../UI/TabButton/TabButton';

export default function ExamplesSection({ items }) {
  const itemsObjectKeys = Object.keys(items);
  const [selectedTopic, setSelectedTopic] = useState('');

  function tabButtonSelected(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Section id='examples' title='Examples'>
      <menu>
        {itemsObjectKeys.map((objectKey) => {
          return (
            <TabButton
              key={objectKey}
              isSelected={selectedTopic === objectKey}
              onSelect={() => tabButtonSelected(objectKey)}
            >
              {items[objectKey].title}
            </TabButton>
          );
        })}
      </menu>
      {!selectedTopic && <p>Please select a topic.</p>}
      {selectedTopic && (
        <div id='tab-content'>
          <h3>{items[selectedTopic].title}</h3>
          <p>{items[selectedTopic].description}</p>
          <pre>
            <code>{items[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
