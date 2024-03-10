import ProjectSidebar from './components/ProjectSidebar';
import ProjectViewer from './components/ProjectViewer';
import AddProjectForm from './components/AddProjectForm';

import { useState } from 'react';

function App() {
  const [isAddingProject, setIsAddingProject] = useState(false);

  function handleOnCreateNewProjectClick() {
    setIsAddingProject(true);
  }

  function handleOnCancelClick() {
    setIsAddingProject(false);
  }

  function handleOnSaveClick() {}

  return (
    <div className='pt-12'>
      <ProjectSidebar onCreateNewProjectClick={handleOnCreateNewProjectClick} />
      {!isAddingProject && (
        <ProjectViewer onCreateNewProjectClick={handleOnCreateNewProjectClick} />
      )}
      {isAddingProject && (
        <AddProjectForm onCancelClick={handleOnCancelClick} onSaveClick={handleOnSaveClick} />
      )}
    </div>
  );
}

export default App;
