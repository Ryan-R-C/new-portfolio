import styled from "styled-components";



export const Container = styled.div`

display: flex;
width: 75%;
margin: 0 auto 10% auto;


/* margin-top: 10%; */
/*
padding: 10%;
*/
display: flex;
justify-content: center;
align-content: center;
align-items: center;

@media(max-width: 800px) {
  width: 100%;
  padding: 20px;
  flex-direction: column !important;


}



h2{
  text-align: center;
  margin-bottom: 100px;
}  



.row{
  margin-left: 50px;
}
.reserse-row{
  margin-right: 50px;
}


  .row, .reserse-row{
    @media(max-width: 800px) {
      margin: 0;
      padding: 30px 0;
    }
  }


`;


export const ContainerText = styled.div`
width: 70%;

@media(max-width: 800px) {
  width: 80%;

}

h3{
  font-size: 32px;
  text-align: center;
  margin-bottom: 50px;
}


p{
  margin-bottom: 25px;

}


div{
  
}

.text-center{
  text-align: center;
}
`;



export const ContaneirImage = styled.div`


display: flex;
width: 100%;
max-width: 350px;


display: flex;
justify-content: center;
align-content: center;
align-items: center;
  
position: relative;



height: 30%;


div{
  
  position: relative;
  height: 100%;
  
  position: relative;
  
  height: 0;
  
 min-height: 300px;
 min-width: 300px;

 @media(max-width: 800px) {
  min-height: 130px;
  min-width: 150px;
}


}

  .icon-image{
    top:0;
    bottom:0;
    left:0;
    right:0;
    /*
    position: absolute;
    height: 100%;
    */
   width: 100%;

  
  }

  
  

  
`;
