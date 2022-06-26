import React from 'react';
import PortfolioParagraph from '../../Portfolio/PortfolioParagraph';
import PortfolioImage from '../../Portfolio/PortfolioImage';
import LandingImage from '../LandingImage';
import {  Container, Project, ProjectContainer } from './styles';

import { BsQuestion } from 'react-icons/bs';
import { IoBag } from 'react-icons/io5';
import FeaturedBlockQuote from '../../FeaturedBlockQuote';
import Portfolio from '../../../pages/Portfolio';
import AboutMe from '../AboutMe';
import ImageContainer from '../ImageContainer';
import About from '../../About/About';


export default function Landing(
    // { title, link, src, paragraph }: any
    ) {
  return (
    <div >
        <Container>
                <AboutMe/>
                <ImageContainer/>
        </Container>
        
        <FeaturedBlockQuote
        quote="“Choose a job you love, and you will never have to work a day in your life”"
        author="Confusius"
        />
        

        <About/>
        
        

        
        <FeaturedBlockQuote
        quote="“Choose a job you love, and you will never have to work a day in your life”"
        author="Confusius"
        />
        
        <Portfolio/>
        
    </div>
  );
}

