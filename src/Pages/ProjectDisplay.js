import React from 'react';
import { useParams } from 'react-router-dom';
import {ProjectList} from '../helpers/ProjectList';
import '../styles/ProjectDisplay.css'


function ProjectDisplay() {
  const {id} = useParams();
  const project = ProjectList[id];
  return (
      <div className='project'>
          <h1>{project.name}</h1>
          <div className="project-images">
              <img src={project.image2} alt="Project Image 2" />
              <img src={project.image3} alt="Project Image 3" />
          </div>
          <h3>{project.skills}</h3>
          <div className="project-description">
              <p>{project.description}</p>
              {project.repositoryLink && (
                  <a href={project.repositoryLink} 
                  target="_blank" 
                  rel="noopener noreferrer">
                      {project.repositoryText}
                  </a>
              )}
          </div>
          
      </div>
  )
}


export default ProjectDisplay
