import React from 'react';
import Loader from '../Loader/Loader';
import './Project.css';

const ProjectSection = () => {
  const projects = [
    {
      title: 'Calculator',
      description: `A basic React calculation is an interactive web application developed using the React library. It features input fields for numbers, operational buttons like addition or subtraction,  and dynamically displays the computed result, showcasing React's  ability to create dynamic and responsive user interfaces for simple mathematical operations.`,
      link: 'https://dev-cal.vercel.app/',
    },
    {
      title: 'Comment Section',
      description: `The Frontend Mentor comment section challenge involves creating an interactive UI component where users can post  comments. Implementing user input validation, real-time rendering, and an engaging layout to display threaded conversations tests frontend skills in design, form handling, and dynamic content presentation.`,
      link: 'https://comment-section-six-theta.vercel.app/',
    },
    {
      title : 'Intro-section-with-dropdown-navigation-main',
      description: `The Frontend Mentor "Intro Section with Dropdown Navigation" challenge tasks designers with crafting a webpage's opening segment. By integrating a dropdown menu into the navigation, participants must ensure seamless functionality and responsiveness, displaying adeptness in both design aesthetics and interactive user experience.`,
      link: 'https://intro-section-with-dropdown-eight.vercel.app/',
    },
    {
      title: 'Order summary',
      description: `
      The Frontend Mentor "Order Summary" challenge directs designers to build a compact, visually appealing order summary component. By incorporating elements such as item details, pricing, and a call-to-action button, participants exhibit proficiency in creating an engaging and informative UI component that enhances the user's checkout experience.`,
      link: 'https://order-summary-component-main-livid.vercel.app/'
    },
    {
      title: 'Reufort college Demo',
      description: `"Reufort College" is a school website I constructed, featuring intuitive navigation, course details, faculty profiles, and event updates. Its user-friendly design fosters seamless exploration, while responsive layout ensures optimal viewing across devices. The site effectively showcases the institution's offerings and engages visitors with informative content.`,
      link:'https://reufort.vercel.app/',
    },
    {
      title: 'Pixel Bridge project',
      description: ``,
      link:'https://pixelbridge.vercel.app/',
    },
    {
      title: 'Ultimate Resource Kit Project',
      description: ``,
      link: 'https://urk-ivory.vercel.app/',
    },
    {
      title: 'Freeskout project',
      description: ``,
      link: 'https://freeskout.vercel.app/'
    },
    {
      title: 'Herione',
      description:``,
      link: 'https://he-roines-rq95.vercel.app/',
    }
    // Add more project objects as needed
  ];

  return (
    <section id="projects">
      <h2 className='head'>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
          
            <div className="project-info">
              <h3 className='top'>{project.title}</h3>
              <p className='info'>{project.description}</p>
              <a href={project.link} className='a' target="_blank" rel="noopener noreferrer">
               <button> View Project</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <Loader />
    </section>
   
  );
};

export default ProjectSection;

//<img src={project.imageUrl} alt={project.title} />//