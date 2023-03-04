import styled from "styled-components";

export const Container = styled.div`
background: #f5f5f5;
box-shadow: 0 1px 0 rgba(0,0,0,.1);
display: flex;
flex-direction: row;
left: 0;
/* justify-content: space-between; */
justify-content: flex-end;
min-height: 15px;
padding: 25px 12.5%;
position: sticky;
top: 0;
width: 100%;
z-index: 10;

@media(max-width: 850px) {
  padding: 25px 12.5%;
  height: 65px;
}

@keyframes openModal {
  from {
    height: 0px;
    border-width: 0px;
    border-top-width: 0px;    
  }
  to  {
    height: 45vh;
    border-top-width: 3px;
  }
}
`;


export const MainItem = styled.div`
align-items: center;
display: flex;

flex-direction: column;
justify-content: center;

position: relative;
width: 35%;

`
export const SubItem = styled.div`
align-items: center;
display: flex;
flex-direction: row;
justify-content: center;
position: relative;
width: 45%;
min-width: 480px;

@media(max-width: 850px) {
  display: none;
}

`





export const WideMenu = styled.div`
display: flex;
justify-content: space-between;
width: 100%;

  a {
    font-size: 16px;
    padding: 0 0 0 5%; 
  }

  a:first-child {
    padding: 0; 
  }
`


export const MobileMenu = styled.div`
align-items: center;
display: flex;
flex-direction: row;
position: relative; 
height: 100%;
justify-content: flex-end;
width: 55%;

@media(min-width: 850px) {
  display: none;
}

.deactivated{
  height: 0;
  padding: 0 5%;
  border: 0;
}

.activated{
  animation-delay: 0s;
  animation-duration: .5s;
  animation-name: openModal;
  animation-timing-function: ease-in-out;
}
`

export const MenuController = styled.div`
position: relative;
transition: all .5s;
width: 100%;
display: flex;
justify-content: flex-end;

.open-contaier{
  color:  #2ea3f2;
}

`
export const ActivatedMenu = styled.div`
background: #fff;
background-color: rgb(255, 255, 255);
background-image: none;
box-shadow: 0 2px 5px rgba(0,0,0,.1);
border-top-color: #2ea3f2;
border-top-style: solid;
border-top-width: 3px;
display: flex;
flex-direction: column;
height: 45vh;
justify-content: space-between;
left: 0;
padding: 5%;
position: absolute;
overflow: hidden;
opacity: 1;
transition: all .5s;
visibility: visible;
top: 40px;
width: 100%;
z-index: 999;

a {
  border-bottom: 1px solid #cacaca;
  padding: 20px 0;
}
a:last-child{
  padding-bottom: 10px;
  border-bottom: 0;

}
`
