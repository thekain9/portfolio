import React from 'react';
import {useNavigate} from 'react-router-dom'

function ProjectItem({image, name, id}) {
  const navigate = useNavigate();
  return <div className='projectItem' onClick={()=>
  {navigate('/Projects/'+ id)}}>
  <div style={{backgroundImage: `url(${image})`}} className='bgImage' />
    <h2>{name}</h2>
  </div>

}

export default ProjectItem
