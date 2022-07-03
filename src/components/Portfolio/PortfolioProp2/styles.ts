import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: blue;
  width: 100%;
  height: 100%;
`;



export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 100%;

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
  height: 100%;


  
  h2 { 
    font-size: 40px;
    margin-bottom: 20px;
    text-align: center;
  }
`;


export const DisplayedImges = styled.div`
background-color: green;
display: flex;
`

export const MainImge = styled.div`
background-color: red;
display: flex;

img{
  max-width: 100%;
  width: 50px
}
`
export const MobileImage = styled.div`
background-color: blue;
display: flex;



img{
  max-width: 100%;
  width: 20px
}
`
export const MainText = styled.div`
background-color: purple;
`




