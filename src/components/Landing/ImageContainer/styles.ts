import styled from "styled-components";


export const Aside = styled.aside`
  display: flex; 
  align-items: start;
  justify-content: end;
  padding: 0;
  margin: 0;
  padding-right: 5vw;
 
  flex-direction: column;
  background-color: #141617;

  width:50%;
  overflow: hidden;

  @media(max-width: 700px) {
    width: 100%;
    padding-bottom: 50px;
    align-items: end;
  }





  
  h2 {
    /* 
    font-size: 40px
    */
    font-size: 14px;
  }

  .container{
    padding: 0;
    margin: 0;
  }
`;




