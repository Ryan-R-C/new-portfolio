import styled from "styled-components";

export const Container = styled.div`
`

export const FlexContainer = styled.div`
display: flex;
justify-content: space-between;


article{
  width: 30%;

  display: flex;

  flex-direction: column;


  a{ 

    width: fit-content;
  }
}

aside{
  /*
  width: 290px;
  background-image: linear-gradient(139deg, rgb(185, 185, 185) 0%, rgb(36, 38, 43) 100%);
  */
  width: 50%;
  height: 290px;  
  position: relative;

  background-size: 100% 100%;
  background-repeat: no-repeat;
}




`;


export const ContentContainer = styled.div`
padding: 10% 0 0 0;
margin: 3% 0 0 0;
z-index: 99;
position: relative;

p{
  padding-bottom: 1em;
}

a{
  color: #0660ff !important;
  transition: all .3s;
  
  &: hover{
    color: #0549c1 !important
  }
}



li {
  padding-bottom: 1em;
}


.wraped-content{
  margin-bottom: 24px;
}
`