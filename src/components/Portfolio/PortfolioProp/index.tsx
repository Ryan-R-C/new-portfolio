import React from 'react';
import PortfolioParagraph from '../PortfolioParagraph';
import PortfolioImage from '../PortfolioImage';
import { Container, Project, ProjectContainer } from './styles';


export default function PortfolioProp({ title, link, src, paragraph }: any) {
  return (
    <Container>
        <ProjectContainer>
            <Project>
                <PortfolioImage
                    imageLink={link}
                    imageSrc={src}
                    title={title}
                />
                <PortfolioParagraph>
                    <p>{paragraph}</p>
                </PortfolioParagraph>
            </Project>
        </ProjectContainer>
    </Container>
  );
}

