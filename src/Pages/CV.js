// Import the React library for creating components.
import React from 'react';

// Import components related to the vertical timeline from the 'react-vertical-timeline-component' library.
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

// Import the CSS styles for the vertical timeline from the library.
import "react-vertical-timeline-component/style.min.css";

// Import the 'School' and 'Work' icons from the '@material-ui/icons' library.
import { School } from '@material-ui/icons';
import { Work } from '@material-ui/icons';

// Import custom CSS styles for the CV component.
import "../styles/CV.css";



function CV() {
  return (
    <div className='cv'>
      <VerticalTimeline lineColor="#8C3756">
  
  <VerticalTimelineElement 
    className='vertical-timeline-element--education' 
    date="May 2023 - Currently working"
    iconStyle={{background: "#F29188"}}
    icon={<School />}
  >
    <h3 className='vertical-timeline-element-title'>
    Fluxo (London)
    </h3>
    <p>Part time designer, I create poster designs in 3D and take care of videos and promotion fro the events launch</p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement 
    className='vertical-timeline-element--education' 
    date="March 2023 - September 2023"
    iconStyle={{background: "#F29188"}}
    icon={<School />}
  >
    <h3 className='vertical-timeline-element-title'>
    HyperionDev (Remote)
    </h3>
    <p>Full Stack Web Development Bootcamp</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement 
    className='vertical-timeline-element--education' 
    date="November 2022 - May 2023"
    iconStyle={{background: "#F29188"}}
    icon={<School />}
  >
    <h3 className='vertical-timeline-element-title'>
    Freelance Designer and Paid Social Media Manager (London)
    </h3>
    <p>In my role, I functioned as a versatile professional, seamlessly blending the responsibilities of a paid social 
    media manager and a freelance designer. My scope of work encompassed both the design and creation of compelling 
    social media content, as well as the adept management of Instagram and Facebook accounts for a diverse clientele. 
    I adeptly navigated the dynamic landscape of social media, delivering impactful results for clients.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement 
    className='vertical-timeline-element--education' 
    date="June 2022 - October 2022"
    iconStyle={{background: "#F29188"}}
    icon={<Work />}
  >
    <h3 className='vertical-timeline-element-title'>
    Freelance Animator (London)
    </h3>
    <p>As an animator, I specialized in crafting engaging content for social media, with a primary focus on logo 
    animation and video editing. My work extended to collaborating on numerous promotional campaigns for Muzz app 
    across various platforms, including Facebook, Instagram, and LinkedIn. I contributed to creating captivating 
    visual experiences and enhancing brand presence</p>
  </VerticalTimelineElement>

 <VerticalTimelineElement 
      className='vertical-timeline-element--education' 
      date="September 2019 - May 2022"
      iconStyle={{background: "#F29188"}}
      icon={<School />}
    >
      <h3 className='vertical-timeline-element-title'>
      London Metropolitan University (London)
      </h3>
      <p>BA in Illustration & Animation</p>
    </VerticalTimelineElement>

    <VerticalTimelineElement 
      className='vertical-timeline-element--education' 
      date="September 2018 - May 2019"
      iconStyle={{background: "#F29188"}}
      icon={<School />}
    >
      <h3 className='vertical-timeline-element-title'>
      London Metropolitan University (London)
      </h3>
      <p>Foundation Degree in Arts and Design</p>
    </VerticalTimelineElement>

    <VerticalTimelineElement 
      className='vertical-timeline-element--education' 
      date="March 2016 - August 2019"
      iconStyle={{background: "#F29188"}}
      icon={<School />}
    >
      <h3 className='vertical-timeline-element-title'>
      Events assistant supervisor at Firmdale Hotels (London)
      </h3>
      <p>While my previous roles as an Events Assistant Manager may not be directly related to web development, 
      they have equipped me with essential skills that can benefit any professional environment. In these positions, 
      I learned to thrive under pressure, effectively communicate with diverse individuals, demonstrate responsibility, 
      and uphold a strong commitment to delivering exceptional results. </p>
    </VerticalTimelineElement>

  </VerticalTimeline>
    </div>
  )
}

export default CV
