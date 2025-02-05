import { Container, DisplayedImges, MainImge, MainText, MobileImage, ProjectContainer } from './styles';


export default function PortfolioProp2({ title, link, src, paragraph }: any) {
  return (
    <Container>
        <ProjectContainer>
                
                <DisplayedImges>
                    <MainImge>
                        <img src={src} alt="" />
                    </MainImge>
                    <MobileImage>
                        <img src={src} alt="" />
                    </MobileImage>
                </DisplayedImges>
                <MainText>
                    <h2>{title}</h2>
                    <p>{paragraph}</p>
                </MainText>
        </ProjectContainer>
    </Container>
  );
}

