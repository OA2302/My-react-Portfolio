import React, { JSX } from "react";

const projects = [ 
    { 
     title: "Comment Section", 
     description: 
       "A simple comment text area section. Skills used:REACT.JS, HTML/CSS. https://comment-section-six-theta.vercel.app/", 

   },
   {
     title: "Calculator",
     description: 
     "My react.js calculator . Skills Used: React.js, HTML/CSS. https://2nd-calculator.vercel.app/",

   },
   { 
     title: "QR-Code Component", 
     description: 
       "A simple comment text area section. Skills used:HTML/CSS. https://qr-code-component-main-cyan-eight.vercel.app/", 

   },
    {
     title: "Review Section",
     description: "My demo  Review Section Skills. Used: HTML/CSS and JS. https://comment-section-six-theta.vercel.app/",
    },
    { 
     title: "Signup", 
     description: 
       "A well designed and functional signup function 🔥️. Skills used: HTML/CSS only",

   } 
   
   ];
   
class Project extends React.Component {
  render() {
    return (
      <div className="project-section">
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <img src={this.props.image} alt={this.props.title} />
        <a href={this.props.link}>Learn more</a>
      </div>
    );
  }
}
export default Project;
