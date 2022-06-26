import styled from "styled-components";


export const Info = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;  
  flex-direction: column;
  background-color: white;
  /*
  max-width: 100%;
  margin: 20px  5%;
  */

  color: white;

  padding: 20px 5%;
 
  width:47%;
  @media(max-width: 700px) {
    width: 100%;
  }
  position: relative;
  
  margin-bottom: 5%;
  
  @media(max-width: 700px) {
    margin-bottom: 0;
  }

  background-image: linear-gradient(-45deg, #012d46, 10%, #0693e3, 50%);

  background-color: #FBAB7E;
  background-image: linear-gradient(139deg,#0549c1 0%,#0e2a5b 100%);
  /*
  #1792d2;
  --custom-heavyblue: #143774
  */

  .container{
    margin-bottom: 50px;

    @media(max-width: 700px) {
      align-self: baseline;
    }

  }



  
  h1 { 
    font-family: 'Karla',Helvetica,Arial,Lucida,sans-serif;
    font-weight: 700;
    font-size: 4rem;
    letter-spacing: -3px;
    line-height: 0.9em;

    margin: 10px 0;
  }


  h2 {
    font-family: 'Montserrat',Helvetica,Arial,Lucida,sans-serif;
    text-transform: uppercase;
    color: white;
    font-size: 14px;

    letter-spacing: 2px;
    line-height: 1.8em;  

  }


`;

export const Buttons = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;

  .button:nth-child(2) {

    margin-left: 25%;
  }


.button{
    display: flex;
    white-space: -moz-pre-space;

    align-items: center;
    justify-content: center;

    width: auto;
    height:auto;

    padding: 15px 25px;


    margin: 10px 0;
    
    
    color: #ffffff !important;
    

    font-size: 15px;
    font-weight: 700 !important;
    background-color: #141617;


    font-family: Open Sans,Arial,sans-serif;

    .icon{
      margin-left: 5px;
    }
    
}

.button--featured{
  background: transparent;
  border: 1px solid white;

  width: auto;
  height:auto;

  padding: 10px 20px;
  line-height: 1.7em !important;

  padding: 50
  /*

  width: 149px;
  */
}

.button{

  color: #ffffff !important;
  text-transform: uppercase;  

}

`