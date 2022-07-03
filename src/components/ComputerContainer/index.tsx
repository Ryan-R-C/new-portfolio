import {  Container } from './styles';

export default function ComputerContainer(
    { imgSrc }: any
    ) {
  return (
    <Container>
      <img src="https://www.bebold.ch/img/home/macbook-white.png" alt="MacBook Computer Apple"
      className='computer-image'
      />
      <div id="gif" style={{backgroundImage:`url(${imgSrc})`}} />
    </Container>
  );
}

