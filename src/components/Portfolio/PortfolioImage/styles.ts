import styled from "styled-components";

export const Image = styled.a`
display: flex;
align-items: center;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
height: 100%;
width: 100%;
margin: 0 auto;
position: relative;
z-index: 1;

  h2{
    
    position: absolute;
    left: 0;
    right: 0;

    bottom: 0;
    margin: auto;
    margin-bottom: 10px;
    color: white;
    z-index:1;
  }

  &:before {
    transform: translateX(0%);
    transform: translateY(0%);
    position: absolute;
    z-index: 0;
    content: "";
    top: -0%;
    height: 100%;
    width: 100%;
    border: 0;

    background: #0000008a;
    right: 0;
    transform: translateX(1.05%) rotate(2deg) translateY(-2.5%);

    transition: all 0.2s; 
    }
    
    div{
      overflow: hidden;
      height: 100%;
      width: 100%;
      display: flex;

      img {
  
          width: 100%;
          height: 300px;
  
          background-color: blue;  
          margin: 0 auto;
          position: relative;
          width: 100%;
          object-fit: cover;
          
          transition: all 0.2s; 
          transition-timing-function: cubic-bezier(0,0,.2,1);
          transform: scale(1.03);
      }
    }
    &:after{
      position: absolute;
      top: 0;
      right: -1px;
      bottom: -1px;
      left: -1px;
      background-image: linear-gradient(180deg,transparent 25%,#00000082 90%);
      content: "";
      transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
      transition-duration: .5s;
      transition-timing-function: cubic-bezier(0,0,.2,1);
    }

    &:hover{

      img{
        transform: translateZ(0);
      }

      &:before {

        transform: translateX(0%) rotate(0) translateY(-2.5%);
        background: #0000008a;
      }
    }
`;