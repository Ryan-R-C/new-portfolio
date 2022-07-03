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


export default function ImageContainerCourse(
    { landingImageSrc, direction }: any
    ) {

  
  return (
    < >
      <Aside>
          <div>
            <img
            className={
              direction != 'row' ? (
                "reverse-row"
                ) : (
                "row"
              )
            }
            src={landingImageSrc}
            />
          </div>
      </Aside>
      </>
  );
}

