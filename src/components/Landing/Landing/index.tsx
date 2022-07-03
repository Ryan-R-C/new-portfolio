import { Container, LandingContainer } from './styles';
import FeaturedBlockQuote from '../../FeaturedBlockQuote';
import Portfolio from '../../../pages/Portfolio';
import AboutMe from '../AboutMe';
import ImageContainer from '../ImageContainer';
import About from '../../About/About';
import Header from '../../Header/';
import Timeline from '../../../pages/Timeline';
import Courses from '../../../pages/Courses';


export default function Landing(
  { info }: any
) {
  return (
    <div >
      <Header />
      <LandingContainer id="Landing">
        <AboutMe />
        <ImageContainer
          landingImageSrc={info?.landingImage}
        />
      </LandingContainer>

      <Container id="AboutMe">
        <FeaturedBlockQuote
          quote={info?.aboutMeQuote?.quote}
          author={info?.aboutMeQuote?.author}
        />
        <About
          mainAboutTitle={info?.mainAboutText?.title}
          mainAboutText={info?.mainAboutText?.paragraphs}
          asideAboutTitle={info?.asideAboutText?.title}
          asideAboutText={info?.asideAboutText?.paragraphs}
        />
      </Container>

      <Container  id="Portfolio">
        <FeaturedBlockQuote
          quote={info?.portFolioQuote?.quote}
          author={info?.portFolioQuote?.author}
        />
        <Portfolio
          filters={info.filtros}
          info={info?.portFolioInfo}
        />
      </Container>

      <Container  id="Timeline">
        <Timeline
          filters={info.filtros}
          info={info?.portFolioInfo}
        />
      </Container>

      <Container  id="Courses">
        <Courses
        props={info.coursesInfo}
        >
        </Courses>
      </Container>
    </div>
  );
}

