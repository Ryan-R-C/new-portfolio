import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  position: relative;

  flex-direction: row;
  width: 75%;

  /*
  padding: 30px; 
  */
  margin: 15% auto;




  p{
    margin-bottom: 20px;
  }
`


export const Button = styled.a`
background: transparent;
border: 1px solid #0549c1;
color: #0549c1 !important;
width: auto;
height:auto;
display: flex;
align-content: center;
justify-content: center;
padding: 10px 20px;
transition: all .5s ;
line-height: 1.3em ;
z-index: 2;

&:hover{
  padding: 10px 30px;

  svg{
    color: #0549c1 !important;
    transform: translateX(.7em) !important;
    width: auto !important;
  }
}

svg{
  transition: all .5s;
  color: transparent;
  transform: translateX(-.5em);
  
  /*
  padding-bottom: 2px;
  */
 
  width: 0;
  align-self: center;
  justify-self: center;
  padding: 0;
  margin: 0;
  

}


`;



