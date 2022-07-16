import React, { useEffect, useState } from 'react';

import { Container, LandingContainer } from './styles';
import FeaturedBlockQuote from '../../components/FeaturedBlockQuote';
import Portfolio from '../Portfolio';
import AboutMe from '../../components/Landing/AboutMe';
import ImageContainer from '../../components/Landing/ImageContainer';
import About from '../../components/About';
import Header from '../../components/Header/';
import Timeline from '..//Timeline';
import Courses from '../Courses';
import Loading from '../../components/Loading';
import { storagedInfo } from '../../info';


export default function LandingPage() {
  const [info, setInfo] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(
    () => {
      setTimeout(
        () => {
          setLoading(false)
          }, 3000
      )

    }, []
  )

  
 

  useEffect(
    () => {
      let newInfo = storagedInfo

      setInfo(newInfo)
    }, []
  )

  return (
    <>
      <Loading loading={loading}/>

      {/* Loads the modal's image, for not pop up on user's screen! */}
      <link rel="preload" href="https://www.bebold.ch/img/home/macbook-white.png" as="image" className='computer-image'/>

      <Header />
      <LandingContainer id="Landing">
        <AboutMe />
        <ImageContainer
          landingImageSrc={info?.landing?.landingImage}
          linkedingLink={info?.landing?.linkedingLink}
          gitHubLink={info?.landing?.gitHubLink}
          emailLink={info?.landing?.emailLink}
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

      <Container id="Portfolio">
        <FeaturedBlockQuote
          quote={info?.portFolioQuote?.quote}
          author={info?.portFolioQuote?.author}
        />
        <Portfolio
          filters={info.filtros}
          info={info?.portFolioInfo}
        />
      </Container>

      <Container id="Timeline">
        <Timeline
          title={info?.timelineinfo?.title}
          dates={info?.timelineinfo?.dates}
          description={info?.timelineinfo?.description}
        />
      </Container>

      <Container id="Courses">
        <Courses
          props={info.coursesInfo}
        >
        </Courses>
      </Container>

    </>
  );
}

/*
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
          landingImageSrc={info?.landing?.landingImage}
          linkedingLink={info?.landing?.landingImage}
          gitHubLink={info?.landing?.gitHubLink}
          emailLink={info?.landing?.emailLink}
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



*/

