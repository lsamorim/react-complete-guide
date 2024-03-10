import { useRef } from 'react';

import TextButton from './UI/TextButton';
import Button from './UI/Button';

export default function AddProjectForm({ onCancelClick, onSaveClick }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleOnCancelClick() {
    if (onCancelClick) onCancelClick();
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    if (onSaveClick) onSaveClick();

    console.log(titleRef.current.value);
  }

  return (
    <form
      className='fixed px-4 py-24 h-screen w-screen ml-0 sm:ml-1/5 sm:w-4/5 grid content-start justify-stretch'
      onSubmit={handleOnSubmit}
    >
      <div className='flex justify-end gap-2'>
        <TextButton type='button' onClick={handleOnCancelClick}>
          Cancel
        </TextButton>
        <Button type='submit'>Save</Button>
        {/* <button type='submit'>Save</button> */}
      </div>
      <p className='justify-self-stretch'>
        <label className='block'>Title</label>
        <input ref={titleRef} className='w-full px-2 bg-gray-200 border-b-2 focus:border-gray-600 focus:outline-none' />
      </p>
      <p className='justify-self-stretch'>
        <label className='block'>Description</label>
        <textarea ref={descriptionRef} className='w-full px-2 min-h-14 bg-gray-200 border-b-2 focus:border-gray-600 focus:outline-none' />
      </p>
      <p className='justify-self-stretch'>
        <label className='block'>Due Date</label>
        <input ref={dueDateRef} type='date' className='w-full px-2 bg-gray-200 border-b-2 focus:border-gray-600 focus:outline-none' />
      </p>
    </form>
  );
}
