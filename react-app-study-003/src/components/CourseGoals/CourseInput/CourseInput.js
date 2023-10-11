import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (checkGoalIsValid(event.target.value)) {
      setIsValid(true);
      return;
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!checkGoalIsValid(enteredValue)) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  const checkGoalIsValid = (goal) => goal.trim().length > 0;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid ? '' : 'invalid'}`}>
        <label>Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler} />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
