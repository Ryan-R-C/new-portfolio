import React from 'react';
import PortfolioParagraph from '../../Portfolio/PortfolioParagraph';
import PortfolioImage from '../../Portfolio/PortfolioImage';
import LandingImage from '../LandingImage';
import { Buttons, Info } from './styles';

import { BsQuestion } from 'react-icons/bs';
import { IoBag } from 'react-icons/io5';
import FeaturedBlockQuote from '../../FeaturedBlockQuote';
import Portfolio from '../../../pages/Portfolio';


export default function AboutMe(
    // { title, link, src, paragraph }: any
    ) {
  return (
    <>
        <Info>
            <div className="container">
                <div>
                    <h2>
                        Full Stack Developer &
                    </h2>
                    <h2>
                        Líder de equipe
                    </h2>
                </div>
                <div>
                    <div>
                        <h1>
                            Ryan Costa
                        </h1>
                    </div>
                        <Buttons>
                            <a href="" className='button'>
                                Sobre mim   <BsQuestion  className="icon" size="15px"/>
                            </a>
                            <a href="" className='button button--featured'>
                                Meus Projetos <IoBag  className="icon" size="15px"/>
                            </a>
                        </Buttons>
                </div>
            </div>
        </Info>

    </>
  );
}

