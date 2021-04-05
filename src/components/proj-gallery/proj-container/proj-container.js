import React from "react";
import ProjectDescription from "../proj-description/proj-description";
import ProjectMedia from "../proj-media/proj-media";
import './proj-container.scss';

export const ProjectContainer = () => {

  let containerPosition = "left"; //will be set to prop and added to className - so it can be flipped in css

  let projContent;
  if (containerPosition == "left") {
    projContent = <div><ProjectDescription/><ProjectMedia/></div>    
  } else {
    projContent = <div><ProjectMedia/><ProjectDescription/></div>
  }

  return(
    <div className="project-container">
      {
        projContent
      }
     <div><ProjectMedia/><ProjectDescription/></div> 
    </div>
  )
}

export default ProjectContainer;
