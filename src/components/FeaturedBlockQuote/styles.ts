import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;

  flex-direction: column;
  width: 75%;
  background: #f5f5f5;

  padding: 30px; 
  margin: 15% auto;
  text-align: center;

  blockquote{
    margin-bottom: 2.75%;
    font-size: 2rem;
    color: #3a3a3a;
  }

  .author{
    font-size: 1rem;
    color: #abb8c3;
    font-weight: bold;
  }

  .quotes-icon-container{
    background:  #f5f5f5;
    display: flex;
    width: fit-content;
    padding: 5px;
    border: 1px solid black;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: -6%;

    svg{
      font-size: 1.5rem;
    }
  }

  

`;



