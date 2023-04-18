import React from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="socialMedia">
            <LinkedInIcon onClick={() => window.open('www.linkedin.com/in/camryn-cimber')}/>
            <GitHubIcon onClick={() => window.open('https://github.com/camcimber')}/>
            <EmailIcon onClick={() => window.location = 'mailto:cammycimber@gmail.com'}/>
    
        </div>
        <p> &copy; 2023 camryncimber.com</p>
    </div>
  )
}

export default Footer