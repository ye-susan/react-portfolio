import React from "react";

export const TechContainer = ({techList}) => {
  let iconList = [];

  for (var i = 0; i < techList.length; i++) {
    let item = techList[i]
    let itemTag = <img src={`/icons/${item}-icon.png`} key={i,item} height="30px" width="auto" style={{padding:"5px 5px"}} alt={`${item} icon`}></img>
    iconList.push(itemTag)
  }

  return(
    <div className="tech-container">
      {iconList}
    </div>
  )
}

export default TechContainer;
