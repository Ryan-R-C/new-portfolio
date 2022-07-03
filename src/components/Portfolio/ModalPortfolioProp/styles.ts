import styled from "styled-components";

export const Container = styled.div`
`

export const FlexContainer = styled.div`
display: flex;
justify-content: space-between;


article{
  /*
  */
  width: 30%;

  display: flex;

  flex-direction: column;


  a{ 

    width: fit-content;
  }
}

aside{
  width: 50%;
  
  img{
    width: 100%;
    height: 290px;
    object-fit: contain;
  }

}

`;



export const ContentContainer = styled.div`
padding: 5% 0;

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
  padding-bottom: .7em;
  
}
`