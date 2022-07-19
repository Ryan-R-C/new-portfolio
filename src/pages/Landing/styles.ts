import styled from "styled-components";

export const LandingContainer = styled.div`
  display: flex;
  margin-bottom: 15%;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
  
 @media(max-width: 700px) {
   flex-direction: column;
  }
`;



export const Container = styled.div`
  padding: 2% 0;
`;

export const ProjectContainer = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  max-width: 100%;
  width: 100%;
`;


export const Project = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: 20px  5%;
  max-width: 100%;
  justify-content: center;
  padding: 50px;
  position: relative;
  
  h2 { 
    font-size: 40px
  }
`;





