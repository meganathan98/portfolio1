import React from 'react'
import introimage from "../Assets/intro-bg.jpg"
import "./HomeContent.css"

const HomeContent = () => {
  return (
    <div className='Hero-image'> 
         <div className='image-content'>
            <img className='intro-img' src={introimage} alt='introimage'/>
         </div>
         <div className='Home-content'>
            <p>Hello, I'm Meganathan</p>
            <h1>Reactjs developer</h1>
         </div>
    </div>
  )
}

export default HomeContent;