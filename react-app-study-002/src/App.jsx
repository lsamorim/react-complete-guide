import { CORE_CONCEPTS, EXAMPLES } from './data/data';

import Header from './components/Header/Header';
import CoreConceptsSection from './components/ConceptsSection/CoreConceptsSection';
import ExamplesSection from './components/ExamplesSection/ExamplesSection';

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConceptsSection items={CORE_CONCEPTS} />
        <ExamplesSection items={EXAMPLES} />
      </main>
    </div>
  );
}

export default App;
