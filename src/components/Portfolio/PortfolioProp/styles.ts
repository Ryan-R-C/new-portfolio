import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: blue;
  width: 100%;
`;



export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  width: 100%;

  max-width: 100%
`;


export const Project = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  max-width: 100%;
  margin: 20px  5%;
  position: relative;


  
  h2 { 
    font-size: 40px;
    margin-bottom: 20px;
  }
`;