import React from 'react';

import {  Container, MainItem, SubItem, UnbreakerPage } from './styles';

import { BsQuestion } from 'react-icons/bs';
import { ImQuotesLeft } from 'react-icons/im';


export default function FeaturedBlockQuote(
    { quote, author }: any
    ) {
  return (
    <>
    <Container>
      <MainItem>
      </MainItem>
      <SubItem>
        <div className="container">
          <a href="#">
            Landing
          </a>
          <a href="#AboutMe">
            About Me
          </a>
          <a href="#Portfolio">
            Portfolio
          </a>
          <a href="#Timeline">
            Timeline
          </a>
          <a href="#Courses">
            Courses
          </a>
        </div>
      </SubItem>
    </Container>
    <UnbreakerPage></UnbreakerPage>
    </>
  );
}

