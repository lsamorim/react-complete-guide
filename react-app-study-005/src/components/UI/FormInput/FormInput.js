import styles from './FormInput.module.css';
import React from 'react';

function FormInput({ inputId, label, type, value, onInputChange }) {
  return (
    <div className={styles['form-input']}>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={({ target }) => onInputChange(target.value)}
      />
    </div>
  );
}

export default FormInput;
