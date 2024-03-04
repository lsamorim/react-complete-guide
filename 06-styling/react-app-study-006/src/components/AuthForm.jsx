import { useState } from 'react';

export default function AuthForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleOnEmailChange(newValue) {
    setEnteredEmail(newValue);
  }

  function handleOnPasswordChange(newValue) {
    setEnteredPassword(newValue);
  }

  function handleOnSignInClick() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id='auth-inputs'>
      <div className='controls'>
        <p>
          <label className={`label ${emailNotValid ? 'invalid' : ''}`}>Email</label>
          <input
            className={emailNotValid ? 'invalid' : undefined}
            type='email'
            value={enteredEmail}
            onChange={(event) => handleOnEmailChange(event.target.value)}
          />
        </p>
        <p>
          <label className={`label ${passwordNotValid ? 'invalid' : ''}`}>Password</label>
          <input
            className={passwordNotValid ? 'invalid' : undefined}
            type='password'
            value={enteredPassword}
            onChange={(event) => handleOnPasswordChange(event.target.value)}
          />
        </p>
      </div>
      <div className='actions'>
        <button type='button' className='text-button'>
          Create a new account
        </button>
        <button className='button' onClick={handleOnSignInClick}>
          Sign In
        </button>
      </div>
    </div>
  );
}
