import React from 'react';

import { generateGuid } from './util/GuidUtil';
import UserForm from './components/UserForm/UserForm';
import UsersList from './components/UsersList/UsersList';
import Alert from './components/Alert/Alert';

function App() {
  const [userInputErrors, setUserInputErrors] = React.useState([]);
  const [usersList, setUsersList] = React.useState([]);

  const onSubmitHandler = (userInput) => {
    const errors = validateUserInput(userInput);
    setUserInputErrors(errors);

    if (errors.length > 0) return;

    setUsersList((prevState) => [
      ...prevState,
      {
        id: generateGuid(),
        userName: userInput['user-name'],
        age: +userInput['user-age'],
      },
    ]);
  };

  const validateUserInput = (userInput) => {
    const errors = [];

    if (userInput['user-name'].length === 0)
      errors.push('Username can not be empty.');
    if (+userInput['user-age'] < 1)
      errors.push('Age must be greater than 0.');
    
    return errors;
  };

  const formatErrorMessage = (errors) => {
    return errors.reduce((acc, error) => acc + ' ' + error, '');
  };

  const onAlertOkClickHandler = () => {
    setUserInputErrors([]);
  };

  const onListItemClickHandler = (id) => {
    setUsersList((prevState) => prevState.filter((user) => user.id !== id));
  };

  return (
    <div>
      <UserForm onSubmit={onSubmitHandler} />
      <UsersList
        usersList={usersList}
        onListItemClick={onListItemClickHandler}
      />
      {userInputErrors.length > 0 && (
        <Alert title='Invalid input' message={formatErrorMessage(userInputErrors)} onClick={onAlertOkClickHandler} />
      )}
    </div>
  );
}

export default App;
