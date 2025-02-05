import PortfolioParagraph from '../PortfolioParagraph';
import PortfolioImage from '../PortfolioImage';
import { Container, Project, ProjectContainer } from './styles';


export default function PortfolioProp({ title, link, src, paragraph }: any) {
  return (
    <Container>
        <ProjectContainer>
            <Project>
            <h2>{title}</h2>
                <PortfolioImage
                    imageLink={link}
                    imageSrc={src}
                />
                <PortfolioParagraph>
                    {paragraph}
                </PortfolioParagraph>
            </Project>
        </ProjectContainer>
    </Container>
  );
}

