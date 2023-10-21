import { useState, useRef } from 'react';

import styles from './AddUserForm.module.css';
import FormInput from '../../UI/FormInput/FormInput';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';

function AddUserForm({ onSubmit }) {
  const usernameRef = useRef();
  const userAgeRef = useRef();
  const [userInputErrors, setUserInputErrors] = useState([]);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const userAge = userAgeRef.current.value;
    const userInput = {
      username: username,
      'user-age': +userAge,
    };

    const errors = validateUserInput(userInput);
    setUserInputErrors(errors);

    if (errors.length > 0) return;

    onSubmit(userInput);

    usernameRef.current.value = '';
    userAgeRef.current.value = '';
  };

  const validateUserInput = (userInput) => {
    const errors = [];
    if (userInput['username'].trim().length === 0) {
      errors.push('Username can not be empty.');
    }
    if (userInput['user-age'] < 1) {
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
      <FormInput id='username' label='Username' type='text' ref={usernameRef} />
      <FormInput id='user-age' label='Age (years)' type='number' ref={userAgeRef} />
      <Button type='submit'>Add user</Button>
      {userInputErrors.length > 0 && (
        <Modal
          title='Invalid input'
          message={formatErrorMessage(userInputErrors)}
          onConfirm={onAlertOkClickHandler}
        />
      )}
    </form>
  );
}

export default AddUserForm;
