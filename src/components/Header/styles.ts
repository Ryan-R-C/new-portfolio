import styled from "styled-components";

export const Container = styled.div`
  position: fixed;

  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;

  
  display: flex;
  padding: 25px 0;
  
  justify-content: space-between;
  
  flex-direction: row;
  width: 90%;
  background: #f5f5f5;
  padding: 25px 5%;

  /*
  position: relative;
  margin: 0 auto;
  */

  box-shadow: 0 1px 0 rgba(0,0,0,.1);
`;


export const MainItem = styled.div`
display: flex;
position: relative;

flex-direction: column;
width: 35%;

/*
background: red;
*/
justify-content: center;
align-items: center;

`
export const SubItem = styled.div`
display: flex;
position: relative;

flex-direction: row;
align-items: center;


width: 45%;
justify-content: center;


`


export const UnbreakerPage = styled.div`
padding-top: 66px
`;



export const WideMenu = styled.div`
width: 100%;
justify-content: space-between;
display: flex;

  a {
    font-size: 16px;
    padding: 0 0 0 5%; 

    /*
    padding: 10px;
    */  
  }

  a:first-child {
    padding: 0; 
  }
`


export const MobileMenu = styled.div`
`

export const MenuController = styled.div`
`
export const ActivatedMenu = styled.div`
`
