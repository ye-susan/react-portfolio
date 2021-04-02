import React from 'react'
import starIcon from '../../../assets/leaf.png'
import fStarIcon from '../../../assets/leaf-f.png'
export const StarsRow = ({stars}) => {

  const filledStars = stars
  const blankStars = 3-filledStars
  const iconDimension = "15px"

  const filledStarImgTag = <img src={fStarIcon} width={iconDimension} height={iconDimension} alt="star icon"/>
  const starImgTag = <img src={starIcon} width={iconDimension} height={iconDimension} alt="star icon"/>
 

  const generateStarList = () => {
    let starList = []

    for (var i = 0; i < filledStars; i++) {
      starList.push(filledStarImgTag);
    }
    for (var j = 0; j < blankStars; j++) {
      starList.push(starImgTag);
    }
    return starList;
  }
  

  return (
    <div>
      {
        generateStarList()
      }
    </div>
  )
}

export default StarsRow;