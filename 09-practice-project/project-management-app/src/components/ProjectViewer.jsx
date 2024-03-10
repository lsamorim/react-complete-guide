import noProjectsImg from '../assets/no-projects.png';
import Button from './UI/Button';

export default function ProjectViewer({ onCreateNewProjectClick }) {
  return (
    <div className='fixed px-4 py-24 h-screen w-screen ml-0 sm:ml-1/5 sm:w-4/5 grid content-start justify-center'>
      <div className='grid items-center justify-items-center gap-2'>
        <img className='size-20' src={noProjectsImg} alt='no-project' />
        <h2 className='text-gray-600 font-bold'>No Project Selected</h2>
        <p className='text-gray-500'>Select a project or get started with a new one</p>
        <Button onClick={onCreateNewProjectClick}>Create new project</Button>
      </div>
    </div>
  );
}
