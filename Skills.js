import React from 'react'
import Navbar from '../components/Navbar';
import "./Skills.css"


const Skills = () => {
  return (
    <div>
    <div className='Header-items'>
      <Navbar/>
    </div>
      
      <div className='skill-sets'>
          <h1 className='header-elements'> Skills sets</h1>
        <ul>
          <li>Html</li>
          <li>Css</li>
          <li>Javascript</li><li>Reactjs</li>
          <li>React Bootstrap</li>
          <li>Reactjs</li>
        </ul>
      </div>
      </div>
      
  )
}

export default Skills