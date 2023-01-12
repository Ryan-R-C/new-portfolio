//@ts-ignore
import { Modal } from 'react-modal';
import styled from "styled-components";



export const Container = styled.div`
display: flex;

flex-wrap: wrap;

flex-direction: column;
padding: 0 10%;
/*
align-items: center;
justify-content: center;
background-color: blue;

width: 100%;
*/
max-width: 100%;
padding: 30px;
`;


export const GridContainer = styled.div`
display: flex;

flex-wrap: wrap;
padding: 30px;
margin: 0 10px;


/*
align-items: center;
flex-direction: column;
justify-content: center;
background-color: blue;
width: 100%;

*/
`;

export const GridItem = styled.div`
height: 100%;
/*
width: 100%;
*/
height: 501px;



@media(min-width: 900px) {
  width: calc(50% - 40px);
  padding: 0 20px;
}

`;



export const GridItem2 = styled.div`
height: 100%;
width: 100%;
/*
height: 500px;
*/
height: 60vh;

box-shadow: rgba(0,0,0,0.4) 0px 2px 4px,rgba(0,0,0,0.3) 0px 7px 13px -3px,rgba(0,0,0,0.2) 0px -3px 0px inset;
margin: 1.25% 0;

@media(min-width: 900px) {
  
  width: 48.8%;
  margin-bottom: 1.25%;
}

`;


export const FilterSelector = styled.div`
display:flex;
width: 100%;
flex-wrap: wrap;

button{

  color: #666;
  padding: 10px 20px;
  border: 1px solid #e2e2e2;
  display: block;
  height: auto;
  overflow: hidden;
  margin: -1px -1px 0 0;
  transition: all 0.2s;
  
}

.activeFilter{
  color: #3a3a3a !important;
  border: 1px solid #3a3a3a;
  z-index: 1;

}
`;





export const GridContainerPortfolioItems = styled.div`
/* This tag was causing an overflow */
/* width: 95vw; */

display: flex;
flex-wrap: wrap;
margin: 0 auto;
padding: 2.5%;
justify-content: space-between;

`

export const ModalContainer = styled.div`
display: flex;
flex-direction: column;

.closeModal{
  align-self: flex-end;
  position: fixed;
}






`

export const ModalContent = styled.div`
padding: 5%;

`
