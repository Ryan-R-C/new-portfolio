import styled from "styled-components";


export const Aside = styled.aside`
  display: flex; 
  align-items: start;
  justify-content: end;
  padding: 0;
  margin: 0;


  flex-direction: column;
  position: relative;
 
  @media(max-width: 700px) {
    width: 100%;
    align-items: center;
  }





  
  h2 {
   
    font-size: 14px;
  }

  .container{
    padding: 0;
    margin: 0;
  }

  img {
    object-fit: cover;
    z-index: 2;

   

    width: 115%;
    position: relative;

    max-height: 350px;
    object-fit: contain;
 


    @media(max-width: 700px) {
      width: 75%;
    }


    }

    .reverse-row{
      top: 0% ;
      left: -13px;


      @media(max-width: 700px) {
        right:0;
        bottom:0;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
      }
    }

    .row{
      top:   00px  ;
      left: -50px;

      @media(max-width: 700px) {
        right:0;
        bottom:0;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
      }
    }

  }
`;




