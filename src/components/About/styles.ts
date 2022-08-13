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


@media(max-width: 850px) {
  width: 100%;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
}
`


export const MainAbout = styled.div`
padding: 20px;
display: flex;

flex-direction: column;

width: 47.25%;
margin-right: 5.5%;

@media(max-width: 850px) {
  width: 80%;
}
`;




export const AsideAbout = styled.div`
padding: 20px;
display: flex;

flex-direction: column;

width: 47.25%;

@media(max-width: 850px) {
  width: 80%;
}
`;

