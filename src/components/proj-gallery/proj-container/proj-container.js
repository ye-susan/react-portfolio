import React from "react";

export const ProjectContainer = ({}) => {

  let containerPosition = "left"; //will be set to prop and added to className - so it can be flipped in css

  return(
    <div className="proj-container">
      <div className="proj-description">
        <h3>Hit the Trail</h3>
        <p>
          A project about...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>


      <div className="proj-media">
      </div>
    </div>
  )
}

export default ProjectContainer;
