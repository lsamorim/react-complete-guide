import styles from './InvestmentFormInput.module.css';

function InvestmentFormInput({ id, label, value, onInputChange }) {
  const onInputChangeHandler = ({ target }) => {
    if (target.value.length == 0) return onInputChange(0);
    return onInputChange(target.value);
  };
  return (
    <p className={styles['form-input']}>
      <label htmlFor={id}>{label}</label>
      <input type="number" id={id} value={value} onChange={onInputChangeHandler} />
    </p>
  );
}

export default InvestmentFormInput;
