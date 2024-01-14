import './Header.css';
import keyConceptsImage from '../../assets/images/react-core-concepts.png';

const reactPrefixDecriptions = ['Fundamentals', 'Crucial', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactPrefixDecriptions[getRandomInt(2)];
  return (
    <header>
      <img src={keyConceptsImage} alt='Styled atom' />
      <h1>React Essentials</h1>
      <p>{description} React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
}
