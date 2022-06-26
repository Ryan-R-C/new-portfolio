import styled from "styled-components";

export const Image = styled.div`
display: flex; 
position: relative;

z-index: 1;

  &:before {
    transform: translateX(0%);
    transform: translateY(0%);
    position: absolute;
    z-index: 0;
    content: "";

    top: 30%; 
    left: 5%;

    height: 70%;
    width: 100%;
    border: 0;
    
    right: 0;

    
    background-color:#0693e380;


    @media(max-width: 700px) {
      height: 100%;
      top: 50px;
      left: 25px;
    }

  }

    &:after {
      transform: translateX(0%);
      transform: translateY(0%);
      position: absolute;
      z-index: 1;
      content: "";
      top: 15%;
      left: 5%;
      height: 100%;
      width: 100%;
      border: 0;
      right: 0;      
      background: url("https://www.gautamkrishnar.com/wp-content/uploads/2021/04/actor-01.png")  bottom right  no-repeat; 

      @media(max-width: 700px) {
        height: 100%;
        top: 50px;
        left: 25px;
      }

    }

    img {
      height: 10%
      object-fit: cover;
      z-index: 2;
      top: 50px;

      box-shadow: 0px 64px 64px -12px rgb(20 22 23 / 59%);

      width: 100%;
      position: relative;
      height: 10%
      object-fit: cover;


      @media(max-width: 700px) {
        width: 75%;
      }

      }
    }
    

    
`;


export const SocialMedia = styled.ul`
color: white;

position: absolute;

z-index: 3;

top: 40%;
left: -56px;

background: #141617;

display: flex;
flex-direction: column;

@media(max-width: 700px) {
  top: 40%;
  left: 75%;
  /*
  flex-direction: row;
  top: -59px;
  left: 56px;
  */


}


a, li {
  padding: 20px;
}

`