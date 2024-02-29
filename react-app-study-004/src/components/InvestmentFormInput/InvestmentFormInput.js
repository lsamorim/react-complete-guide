import styles from './InvestmentFormInput.module.css';

function InvestmentFormInput({ id, label, value, onInputChange }) {
  const handleOnInputChange = ({ target }) => {
    if (target.value.length === 0) return onInputChange(0);
    return onInputChange(target.value);
  };
  return (
    <p className={styles['form-input']}>
      <label htmlFor={id}>{label}</label>
      <input type='number' id={id} required={true} value={value} onChange={handleOnInputChange} />
    </p>
  );
}

export default InvestmentFormInput;
