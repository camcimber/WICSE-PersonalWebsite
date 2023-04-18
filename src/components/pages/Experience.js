import { School } from '@mui/icons-material';
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkIcon from '@mui/icons-material/Work';


const Experience = () => {
  return (
    <div>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className= "vertical-timeline-element--education"
          date= "June 2021 - Expected Graduation 2025"
          iconStyle={{background: "#8198FD", color: "#fff"}}
          icon = {<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">University of Florida, Gainesville, FL</h3>
          <h4 className="vertical-timeline-element-subtitle"> Bachelor's Degree</h4>
          <p>Computer Science, Digital Arts and Sciences Minor</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className= "vertical-timeline-element--education"
          date= "September 2019 - December 2022"
          iconStyle={{background: "#8198FD", color: "#fff"}}
          icon = {<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">Saquella Cafe, Boca Raton, FL</h3>
          <h4 className="vertical-timeline-element-subtitle"> Server</h4>
          <p>Worked in a team to deliver guests excellent service and educating them on daily specials.
Responsible for taking orders, learning a POS system,  training new employees, and communicating with the kitchen and other staff.
</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className= "vertical-timeline-element--experience"
          date= "March 2022 - Present"
          iconStyle={{background: "#8198FD", color: "#fff"}}
          icon = {<AssignmentIcon/>}
        >
          <h3 className="vertical-timeline-element-title">Gator User Design</h3>
          <h4 className="vertical-timeline-element-subtitle"> DevlUp Design Team</h4>
          <p>Collaborating with a team to redesign a nonprofit game development organization’s website for the purpose of education. 
Develop a portfolio piece with low-fidelity and high-fidelity wireframes and create prototypes for the website using Figma.
</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience