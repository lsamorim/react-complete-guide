import React from 'react';

import { generateGuid } from './util/GuidUtil';
import AddUserForm from './components/Users/AddUserForm/AddUserForm';
import UsersList from './components/Users/UsersList/UsersList';

function App() {
  const [usersList, setUsersList] = React.useState([]);

  const onSubmitHandler = (userInput) => {
    setUsersList((prevState) => [
      ...prevState,
      {
        id: generateGuid(),
        userName: userInput['username'],
        age: +userInput['user-age'],
      },
    ]);
  };

  const onListItemClickHandler = (id) => {
    setUsersList((prevState) => prevState.filter((user) => user.id !== id));
  };

  return (
    <div>
      <AddUserForm onSubmit={onSubmitHandler} />
      <UsersList usersList={usersList} onListItemClick={onListItemClickHandler} />
    </div>
  );
}

export default App;
