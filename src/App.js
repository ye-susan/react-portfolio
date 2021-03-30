import React, { Component } from 'react';
import './App.scss';
import Sidebar from './components/sidebar/sidebar';
import SectionContainer from './components/section-container/sectioncontainer'
import { Chrono } from "react-chrono";
class App extends Component {
  
  render(){
    const items = [{
      title: "Present day",
      cardTitle: "",
      media: {
        type: "IMAGE",
        source: {
          url: "https://ouch-cdn.icons8.com/preview/366/16375548-34e0-4c0b-a4ae-f3e78540e4bd.png"
        }
      } 
    },{
      title: "Nov 2020 - Feb 2021",
      cardTitle: "Wefunder",
      cardSubtitle:"Fullstack Software Engineering Intern",
      cardDetailedText: "● Deployed React components on Rails application for company website redesign \n"+ " ● Designed and built interactive tooltips on customer facing pages to increase revenue potential by millions of dollars\n● Scripted Rake tasks to manipulate Active Record data and wrote corresponding RSpec tests for tasks\n● Managed and maintained SEO content in embedded Ruby to increase website traffic by 20%+",
    }, {
      title: "Apr 2020 - Nov 2020",
      cardTitle: "Hack for LA",
      cardSubtitle:"Software Engineer",
      cardDetailedText: "● Created template in HTML, CSS, and JavaScript for future webpages (20+) to be reused by other developers, while adhering to responsive design and the DRY principle \n ● Implemented Slack bot in Node.js to automate messages to new volunteers and transfer information into database \n● Documented the entire Hack for LA website architecture, including code explanations to improve efficiency and decrease the time to onboard new volunteers by 20%\n ● Collaborated on implementation of authentication method through use of magic links using Node.js and AWS SES",
      
    }, {
      title: "A time before software development",
      cardTitle: "",
      media: {
        type: "IMAGE",
        source: {
          url: "https://ouch-cdn.icons8.com/preview/406/8d5cf84c-bc4a-464f-a848-02ce2ec1fbaf.png",
          alt: "Illustration by Natasha Remarchuk from icons8.com"
        }
      } 
    },
    {
      title: "July 2018 - Feb 2020",
      cardTitle: "Stout",
      cardSubtitle:"Valuation Analyst",
      cardDetailedText: "● Created financial models, conducted in-depth research, and drafted reports for over 15 clients while achieving a utilization rate of 85%+ for over 15 clients", 
    }];
  

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
                <div style={{ width: "100%", height: "700px" }}>
                  <Chrono
                    items={items}
                    mode="VERTICAL_ALTERNATING"
                    theme={{"primary": "#a0cabc", "secondary": "#f6dd9c", "cardBgColor": "white",  "cardForeColor":"#109499"}}
                    scrollable
                  >
                    <div className="chrono-icons">
                      <img
                        src="https://img.icons8.com/dusk/452/computer.png"
                        alt="computer icon"
                      />
                      <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC560BAQFZJJYPR4HLMA%2Fcompany-logo_200_200%2F0%3Fe%3D2159024400%26v%3Dbeta%26t%3DDLdegHk7W9QuvO6igqYDkJdc0m1A8l11odLMQHOtB9g&f=1&nofb=1"
                        alt="Wefunder logo"
                      />
                      <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F11635254%3Fs%3D200%26v%3D4&f=1&nofb=1"
                        alt="HFLA logo"
                      />
                      <img
                        src="https://img.icons8.com/plasticine/452/business-report.png"
                        alt="business report icon"
                      />
                      <img
                        src="https://external-content.duckduckgo.com/ip3/www.stout.com.ico"
                        alt="Stout logo"
                      />
                    </div>
                  </Chrono>
                </div> 
              </div>
            }
          />

          <SectionContainer
            id="projects"
            sectionTitle="Projects"
            content={
              <div>
               Stay tuned... 👷🏻‍♀️🚧
              </div>
            }
          />


          <SectionContainer
            id="contact"
            sectionTitle="Contact"
            content={
              <div>
                <a href="https://www.linkedin.com/in/susan-ye-dev/"><img src="https://img.icons8.com/clouds/2x/linkedin.png" width="70px" height="70px"/></a>
                <a href="mailto:susanye3@gmail.com"><img src="https://img.icons8.com/clouds/2x/email.png" width="70px" height="70px"/></a>
                <a href="https://github.com/ye-susan"><img src="https://img.icons8.com/clouds/2x/github.png" width="70px" height="70px"/></a> 
              </div>
            }
          />
          
        </div>
        
      </div>

    );
  }   
};

export default App;
