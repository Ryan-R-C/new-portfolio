import React from 'react';

import {  Container } from './styles';

import { BsQuestion } from 'react-icons/bs';
import { ImQuotesLeft } from 'react-icons/im';


export default function ComputerContainer(
    { imgSrc }: any
    ) {
  return (
    <Container>
      <img src="https://www.bebold.ch/img/home/macbook-white.png" alt="MacBook Computer Apple" />
      <div id="gif" style={{backgroundImage:`url(${imgSrc})`}} />
    </Container>
  );
}

