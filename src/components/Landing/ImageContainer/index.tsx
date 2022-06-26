import React from 'react';
import PortfolioParagraph from '../../Portfolio/PortfolioParagraph';
import PortfolioImage from '../../Portfolio/PortfolioImage';
import LandingImage from '../LandingImage';
import { Aside } from './styles';

import { BsQuestion } from 'react-icons/bs';
import { IoBag } from 'react-icons/io5';
import FeaturedBlockQuote from '../../FeaturedBlockQuote';
import Portfolio from '../../../pages/Portfolio';
import AboutMe from '../AboutMe';


export default function ImageContainer(
    // { title, link, src, paragraph }: any
    ) {
  return (
    < >
      <Aside>
          <LandingImage
          imageLink=""
          imageSrc="https://avatars.githubusercontent.com/u/88540088?v=4"
          />
      </Aside>
      </>
  );
}

