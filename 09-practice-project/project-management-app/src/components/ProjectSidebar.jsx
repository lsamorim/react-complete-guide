import Button from './UI/Button';

export default function ProjectSidebar({ onCreateNewProjectClick }) {
  return (
    <aside
      id='separator-sidebar'
      className='fixed left-0 z-40 w-1/5 h-screen transition-transform -translate-x-full sm:translate-x-0'
    >
      <div className='h-full px-4 py-4 overflow-y-auto space-y-6 rounded-r-2xl bg-gray-50 text-black dark:bg-black dark:text-white'>
        <h2 className='mt-8 text-3xl font-bold'>YOUR PROJECTS</h2>
        <div>
          <Button onClick={onCreateNewProjectClick}>+ Add Project</Button>
        </div>
        <ol>
          <li className='text-gray-300'>Learning React</li>
        </ol>
      </div>
    </aside>
  );
}
