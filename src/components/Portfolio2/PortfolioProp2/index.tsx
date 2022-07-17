import React from 'react';
import PortfolioParagraph from '../PortfolioParagraph2';
import PortfolioImage from '../PortfolioImage2';
import { BackgroundImageContainer, Container, Icon, PortfolioContent, Project } from './styles';
import { IoIosArrowRoundForward } from 'react-icons/io'
import { MdArrowForwardIos } from 'react-icons/md';
import AnimatedArrow from '../../AnimatedArrow';

export default function PortfolioProp({ title, src, paragraph, onClickEvent, clickMessage,  }: any) {
  return (
    <Container>
            <Project>
                <BackgroundImageContainer
                style={{
                    backgroundImage: `url(${src})`
                }}
                >
                </BackgroundImageContainer>
                  <PortfolioContent>
                      <h2>{title}</h2>
                      <p>
                        {paragraph}
                      </p>
                      <Icon
                      onClick={() => onClickEvent()}
                      >
                        <AnimatedArrow text={`${clickMessage}`} />
                      </Icon>
                  </PortfolioContent>
            </Project>
    </Container>
  );
}

