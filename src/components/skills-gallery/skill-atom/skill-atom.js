import React from 'react';
import { StarsRow } from '../stars-row/stars-row';

export const SkillAtom = ({stars, skillName, iconLink}) => {
  return (
    <div className="skill-item">
      <img width="40px" height="40px" src={iconLink} alt={skillName}/>
      <StarsRow stars={stars} />
    </div>
  )
}

// stars from <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default SkillAtom;