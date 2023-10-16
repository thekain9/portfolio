import React from 'react';
import "../styles/Skills.css"

function Skills() {
  return (
    <div>
      <div className='skills'>
        <div className='title-container'>
            <h1>MY SKILLS</h1>
        </div>
        <div className='list-box'>
        
            <ol className='list'>
            <div className='item'>
                <li>
                    <h2>Front-End</h2>
                    <span>
                    <h3>Languages and Frameworks:</h3>
                    <ul>
                        <li>ReactJS</li>
                        <li>Redux</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>NPM</li>
                        <li>JavaScript</li>
                    </ul>
                    <h3>UI Libraries and Tools:</h3>
                    <ul>
                        <li>Bootstrap</li>
                        <li>MaterialUI</li>
                        <li>Yarn</li>
                    </ul>
                    <h3>Web Technologies:</h3>
                    <ul>
                        <li>AJAX</li>
                    </ul>
                    <h3>Version Control:</h3>
                    <ul>
                        <li>Git</li>
                    </ul>
                    </span>
                </li>
            </div>
            <div className='item'>
                <li>
                    <h2>Back-End</h2>
                    <span>
                    <h3>Languages and Frameworks:</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                    </ul>
                    <h3>Databases:</h3>
                    <ul>
                        <li>MongoDB</li>
                    </ul>
                    <h3>Authentication:</h3>
                    <ul>
                        <li>JWT (JSON Web Tokens)</li>
                    </ul>
                    <h3>Deployment and Hosting:</h3>
                    <ul>
                        <li>Heroku</li>
                        <li>Hostinger</li> 
                        <li>Render.com</li> 
                    </ul>
                    <h3>Server-Side Rendering:</h3>
                    <ul>
                        <li>Next.js</li>
                    </ul>
                    </span>
                </li>
            </div>
            <div className='item'>
                <li>
                    <h2>Design Skills</h2>
                    <span>
                    <h3>2D Design:</h3>
                    <ul>
                        <li>Photoshop - Expert</li>
                        <li>Illustrator - Proficient</li>
                        <li>Figma - Intermediate</li>
                        <li>Adobe XD (for Prototyping) - Intermediate</li>
                        <li>Drawing Skills - Proficient</li>
                    </ul>
                    <h3>3D Design:</h3>
                    <ul>
                        <li>3D Rendering and Animation - Proficient</li>
                        <li>Blender - Proficient</li>
                        <li>Houdini - Intermediate</li>
                        <li>Cinema 4D (C4D) - Proficient</li>
                        <li>Adobe After Effects - Proficient</li>
                    </ul>
                    <h3>Typographic Skills:</h3>
                    <ul>
                        <li>Adobe InDesign - Proficient</li>
                        <li>Typographic Skills - Proficient</li>
                    </ul>
                    </span>
                </li>
            </div>

            </ol>

            </div>
      </div>
    </div>
  )
}

export default Skills
