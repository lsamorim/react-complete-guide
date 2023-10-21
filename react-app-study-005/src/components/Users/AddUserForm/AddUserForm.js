import { useState } from 'react';

import styles from './AddUserForm.module.css';
import FormInput from '../../UI/FormInput/FormInput';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';

const initialUserInput = {
  username: '',
  'user-age': '',
};

function AddUserForm({ onSubmit }) {
  const [userInput, setUserInput] = useState(initialUserInput);
  const [userInputErrors, setUserInputErrors] = useState([]);

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

    const errors = validateUserInput(userInput);
    setUserInputErrors(errors);

    if (errors.length > 0) return;

    onSubmit(userInput);
  };

  const validateUserInput = (userInput) => {
    const errors = [];
    if (userInput['username'].trim().length === 0) {
      errors.push('Username can not be empty.');
    }
    if (+userInput['user-age'] < 1) {
      errors.push('Age must be greater than 0.');
    }

    return errors;
  };

  const formatErrorMessage = (errors) => {
    return errors.reduce((acc, error) => acc + ' ' + error, '');
  };

  const onAlertOkClickHandler = () => {
    setUserInputErrors([]);
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <FormInput
        inputId='username'
        label='Username'
        type='text'
        value={userInput['username']}
        onInputChange={(value) => onInputChangeHandler('username', value)}
      />
      <FormInput
        inputId='user-age'
        label='Age (years)'
        type='number'
        value={userInput['user-age']}
        onInputChange={(value) => onInputChangeHandler('user-age', value)}
      />
      <Button type='submit'>Add user</Button>
      {userInputErrors.length > 0 && <Modal title='Invalid input' message={formatErrorMessage(userInputErrors)} onConfirm={onAlertOkClickHandler} />}
    </form>
  );
}

export default AddUserForm;
