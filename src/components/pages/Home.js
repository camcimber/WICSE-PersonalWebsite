import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Camryn Cimber</h2>
        <div className="prompt">
          <p>
            A Computer Science Student with a passion for tech.
          </p>
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/camryn-cimber/')}/>
          <GitHubIcon onClick={() => window.open('https://github.com/camcimber')}/>
          <EmailIcon onClick={() => window.location = 'mailto:cammycimber@gmail.com'}/>
        </div>
      </div>
      <div className = "skills">
          <h2>Skills</h2>
          <ol className = "list"> 
              <li className="item">
                 <h6>Languages</h6>
                 <span>Java, C++, JavaScript, HTML</span>
             </li>
             <li className="item">
            <h6>Technology</h6>
            <span>Unity, Node.js, React, Toonboom Animator</span>
          </li>
          <li className="item">
            <h6>CourseWork</h6>
            <span>Data Structures & Algorithms, Intro to Computer Organization</span>
          </li>
          <li className="item">
            <h6>Involvement</h6>
            <span>WICSE</span>
          </li>
          </ol>
      </div>
      </div>
    
   
  )
}

export default Home