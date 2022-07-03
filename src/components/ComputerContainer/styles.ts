import styled from "styled-components";

export const Container = styled.div`
position: absolute;
top: 57%;
left: 63%;
width: 180%;
height: 65%;
opacity: 1;
-webkit-transform: translate(-50%, -50%) scale(1);
transform: translate(-50%, -50%) scale(1);
z-index: 0;
-webkit-transition: all .3s ease;
transition: all .3s ease;



#gif {
  position: absolute;
  top: 48.5%;
  left: 50%;
  width: 50%;
  padding-top: 32%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-size: cover;
  z-index: 15;
  z-index: 0;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  background-image: url(https://www.bebold.ch/img/home/presentation-anim.gif);
  background-position: center;

}
img {
  position: absolute;
  top: 50%;
  left: 50%;
  
  width: 100%;
  height: auto;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 1;

  background-position: center;
}

`;



