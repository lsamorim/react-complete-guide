import React from 'react';

import { generateGuid } from './util/GuidUtil';
import UserForm from './components/UserForm/UserForm';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [usersList, setUsersList] = React.useState([]);
  const onSubmitHandler = (userInput) => {
    setUsersList((prevState) => [
      ...prevState,
      {
        id: generateGuid(),
        userName: userInput['user-name'],
        age: userInput['user-age'],
      },
    ]);
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
    </div>
  );
}

export default App;
