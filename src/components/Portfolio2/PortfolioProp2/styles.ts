import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;



export const Project = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  max-width: 100%;
  height: 100%;
  width: 100%;
  overflow: hidden;


  &:hover{
    header{
      transform: scale(1.02);
      z-index: 2;
      -webkit-filter: blur(5px);
      -moz-filter: blur(5px);
      -o-filter: blur(5px);
      -ms-filter: blur(5px);
      filter: blur(5px);

    &:after{
      position: absolute;
      top: 0;
      -webkit-filter: blur(0);
      -moz-filter: blur(0);
      -o-filter: blur(0);
      -ms-filter: blur(0);
      filter: blur(0);
      right: -1px;
      bottom: -1px;
      left: -1px;
      background-image: linear-gradient(180deg,transparent 0,#000000bd 90%),linear-gradient(360deg,transparent 0,#000000c9 90%);
      filter: brightness(0.1);
      content: "";
      transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
      transition-duration: .5s;
      transition-timing-function: cubic-bezier(0,0,.2,1);
      }
    }

    article{
      transform: translate(-50%, -50%);
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
    
    transition: all 0.3s; 
  }

 
  position: relative;
  height: 100%;

  article{
    transition: all 0.3s; 
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index:3;
    transform: translate(-50%, 200%);
    color: white;
  }
`;


export const BackgroundImageContainer = styled.header`
display: flex;
align-items: center;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

background-position: center;
margin: 0 auto;
position: relative;
z-index: 1;

overflow: hidden;
height: 100%;
width: 100%;

background-repeat: no-repeat;
background-size: cover;
transition: all 0.3s; 
transition-timing-function: cubic-bezier(0,0,5,1);
`;


export const Icon = styled.div`
padding: 20px 0;
margin: 0 auto;
cursor: pointer;
`

export const PortfolioContent = styled.article`
p, h2, h3, ul, li{
  text-align: left;
  color: white;
}

h2 { 
font-size: 40px;

margin-bottom: 1em;
text-align: center;
}


p{
  margin-bottom: .5em;
}

`