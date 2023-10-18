import { useState } from 'react';

import styles from './UserForm.module.css';
import FormInput from '../FormInput/FormInput';

const initialUserInput = {
  ['user-name']: '',
  ['user-age']: '',
};

function UserForm({ onSubmit }) {
  const [userInput, setUserInput] = useState(initialUserInput);

  const onInputChangeHandler = (inputId, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputId]: value,
      };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onSubmit(userInput);
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <FormInput
        inputId='user-name'
        label='Username'
        type='text'
        value={userInput['user-name']}
        onInputChange={(value) => onInputChangeHandler('user-name', value)}
      />
      <FormInput
        inputId='user-age'
        label='Age (years)'
        type='number'
        value={userInput['user-age']}
        onInputChange={(value) => onInputChangeHandler('user-age', value)}
      />
      <button type='submit'>Add user</button>
    </form>
  );
}

export default UserForm;
