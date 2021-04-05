import React from "react";
import './proj-description.scss';


export const ProjectDescription = ({title, ghLink, demoLink, description }) => {

  return(
    <div className="project-description">
      <h3 className="project-title">Hit the Trail</h3>
      <h4 className="project-links">Links: Github Repo, Live Demo</h4>
      <p className="project-description">
        A project about...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <div className="project-technologies">technologies used: <br></br>
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_385324.png&f=1&nofb=1" height="30px" width="30px"></img>
      </div>
    </div>
  )
}

export default ProjectDescription;
