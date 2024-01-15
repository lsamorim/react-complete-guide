import './TabButton.css';

export default function TabButton({ children, onSelect, isSelected }) {
  const defaultClass = 'tab-button';
  const classes = isSelected ? defaultClass + ' active' : defaultClass;
  return (
    <li>
      <button className={classes} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
