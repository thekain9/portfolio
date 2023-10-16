import React from 'react';
import ProjectItem from '../Components/ProjectItem';
import '../styles/Projects.css';
import { ProjectList } from '../helpers/ProjectList';


function Projects() {
  return (
    <div className='projects'>
      <div className='personal-projects'>
        <div className='title-container'>
          <h1>MY PPROJECTS</h1>
        </div>
        
        <div className='projectList'>
        {ProjectList.map((project, index) => {
          return <ProjectItem id={index} name={project.name} image={project.image1} />

        })}

        </div>
      </div>
    </div>
  )
}

export default Projects
