import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  
  /*
  align-items: center;
  justify-content: center;
  background-color: blue;
  background-color: black;
  */
 
 flex-direction: row;
 width: 100%;

 margin-bottom: 25%;
 
 @media(max-width: 700px) {
   flex-direction: column;
  }
`;



export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 100%

  max-width: 100%
`;


export const Project = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  padding: 50px;
  max-width: 100%;
  margin: 20px  5%;
  position: relative;



  
  h2 { 
    font-size: 40px
  }
`;





