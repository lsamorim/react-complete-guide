import { CORE_CONCEPTS } from './data/data';

import Header from './components/Header/Header';
import CoreConceptsSection from './components/Concepts/CoreConceptsSection';
import TabButton from './components/TabButton/TabButton';

function App() {
  function tabButtonSelected(selectedButton) {
    console.log(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <CoreConceptsSection items={CORE_CONCEPTS} />
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => tabButtonSelected('components')}>Components</TabButton>
            <TabButton onSelect={() => tabButtonSelected('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => tabButtonSelected('props')}>props</TabButton>
            <TabButton onSelect={() => tabButtonSelected('state')}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
