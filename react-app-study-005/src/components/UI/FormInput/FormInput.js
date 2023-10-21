import styles from './FormInput.module.css';
import React from 'react';

const FormInput = React.forwardRef((props, ref) => (
  <div className={styles['form-input']}>
    <label htmlFor={props.id}>{props.label}</label>
    <input
      id={props.id}
      type={props.type}
      value={props.value && props.value}
      onChange={props.onChange}
      ref={ref}
    />
  </div>
));

export default FormInput;
