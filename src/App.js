import React, { Component } from 'react';
import './App.scss';
import Sidebar from './components/sidebar/sidebar';
import SectionContainer from './components/section-container/sectioncontainer'
class App extends Component {
  render(){
    return (
      <div className="portfolio">
        
        <Sidebar/>
        
        <div id="home"></div>

  
        <div className="content-area">

          <SectionContainer
            id="about"
            sectionTitle="About"
            content={
              <div>
                <p>Hi! I'm Susan, a self-taught developer excited about fullstack development.  Here's what I'm good at:</p>

                <p><strong>Languages:</strong> JavaScript (Proficient), Ruby (Proficient), HTML (Proficient), CSS (Proficient), Sass (Proficient), Python (Limited)</p>
                <p><strong>Technologies:</strong> Ruby on Rails (Intermediate), React (Intermediate), Git and Github (Intermediate), Postman (Proficient), Node.js (Proficient), MongoDB (Intermediate), PostgreSQL (Intermediate), Integrating APIs (Intermediate), Figma (Proficient)</p>

                <p>When I'm not coding, I like to travel, hike, watch sitcoms, and embroider! I also like mechanical keyboards, and programming tiny computers/robots is next on my to-do list.</p>
              </div>
            }
            
          />

          <SectionContainer
            id="timeline"
            sectionTitle="Timeline"
            content={
              <div>
                
              </div>
            }
          />

          <SectionContainer
            id="projects"
            sectionTitle="Projects"
            content={
              <div>
                
              </div>
            }
          />

<div style={{height: "1000px"}}></div>

          <SectionContainer
            id="contact"
            sectionTitle="Contact"
            content={
              <div>
                LinkedIn: 
                Github: 
                Email: 
              </div>
            }
          />

         
          {/* <div className="about" id="about">About</div>
          <div className="timeline" id="timeline">Timeline</div>
          <div className="projects" id="projects">Projects</div> */}
          
          
        </div>
        
      </div>

    );
  }   
};

export default App;
