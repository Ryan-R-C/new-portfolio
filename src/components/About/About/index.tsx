
import {  Container, MainAbout, AsideAbout } from './styles';
import React, { FC, ReactChildren } from 'react';
import IreactProps from '../../../types/IreactProps';

const About
// : FC<IreactProps> 
= ({ text }: any ) => {
  return (
    <Container>
      <MainAbout>
        <h2>
          About Me
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <span>Laudantium maiores dolor fugit dicta repudiandae labore eaque sapiente quod veniam ex?</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores dolor fugit dicta repudiandae labore eaque sapiente quod veniam ex?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores dolor fugit dicta repudiandae labore eaque sapiente quod veniam ex?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores dolor fugit dicta repudiandae labore eaque sapiente quod veniam ex?
        </p>
      </MainAbout>
      <AsideAbout >
        <h3>
          El lorem 
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores dolor fugit dicta repudiandae labore eaque sapiente quod veniam ex?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores dolor fugit dicta repudiandae labore eaque sapiente quod veniam ex?</p>
      </AsideAbout>
    </Container>
  );
}
export default About

