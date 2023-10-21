import styles from './UsersList.module.css';

function UsersList({ usersList, onListItemClick }) {
  const onListItemClickHandler = ({target}) => {
    onListItemClick(target.id);
  };
  return (
    <ul className={styles.list}>
      {usersList.map((user) => (
        <li key={user.id} id={user.id} onClick={onListItemClickHandler}>
          {user.userName} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
