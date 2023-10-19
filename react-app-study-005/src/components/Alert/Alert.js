import styles from './Alert.module.css';

function Alert({ title, message, onClick }) {
  return (
    <div className={styles.alert}>
      <div className={styles.popup}>
        <div className={styles['popup-header']}>
          <p>{title}</p>
        </div>
        <div className={styles['popup-message']}>
          <p>{message}</p>
        </div>
        <div className={styles['popup-actions']}>
          <button onClick={onClick}>Ok</button>
        </div>
      </div>
    </div>
  );
}

export default Alert;
