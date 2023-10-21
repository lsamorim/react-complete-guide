import styles from './Modal.module.css';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button/Button';

const Backdrop = ({ onConfirm }) => {
  return <div className={styles.backdrop} onClick={onConfirm} />;
};

const ModalOverlay = ({ title, message, onConfirm }) => {
  return (
    <div className={styles['modal-overlay']}>
      <header className={styles['modal-header']}>
        <p>{title}</p>
      </header>
      <div className={styles['modal-message']}>
        <p>{message}</p>
      </div>
      <footer className={styles['modal-actions']}>
        <Button onClick={onConfirm}>Ok</Button>
      </footer>
    </div>
  );
};

function Modal({ title, message, onConfirm }) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onConfirm={onConfirm} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay title={title} message={message} onConfirm={onConfirm} />, document.getElementById('overlay-root'))}
    </Fragment>
  );
}

export default Modal;
