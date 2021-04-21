import React from 'react';
import styled from 'styled-components';
import "../downloadImage/downloadpage.css"

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UnsplashImage = (props) => {
  return (
    <>
    <div className="myGallery">
     <div className="item">
     <Img src={props.url} alt="" />
    <span  className="caption">DamageType : {props.damagetype}</span>
  </div></div>
      
    </>
  )
}
