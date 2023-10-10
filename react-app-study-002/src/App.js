import componentsImage from './assets/images/components.png';
import stateImage from './assets/images/state.png';
import eventsImage from './assets/images/events.png';

import Header from './components/Header/Header';
import Concepts from './components/Concepts/Concepts';

import ConceptModel from './models/ConceptModel';

const concepts = [
  new ConceptModel('Components', componentsImage, 'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.'),
  new ConceptModel('State', stateImage, 'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.'),
  new ConceptModel('Events', eventsImage, 'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.')
];

function App() {
  return (
    <div>
      <Header />
      <Concepts items={concepts} />
    </div>
  );
}

export default App;