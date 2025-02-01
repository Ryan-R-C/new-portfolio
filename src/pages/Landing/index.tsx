import { useEffect, useState } from 'react';

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
import { ilanguages } from '../../types/ilanguages';
import { useLangAtom } from '../../hooks/useLangAtom';


export default function LandingPage() {
  const [info, setInfo] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)
  const { lang, setLang } = useLangAtom()

  const handleSetLocalStorageLanguage = (lang: ilanguages) => {
    setLang(lang)
  }

  const handleGetLocalStorageLanguage = (): string => {
    return lang;
  }


  const handleSetLanguage = (avaliableLanguage: ilanguages) => {
    setLang(avaliableLanguage)
    handleSetLocalStorageLanguage(avaliableLanguage)

    let newInfo = storagedInfo[avaliableLanguage]
    setInfo(newInfo)
  }

  const handleGetUserLanguage = () => {
    const languageInLocalStorage = handleGetLocalStorageLanguage();
    const userLanguage = languageInLocalStorage || navigator.language;

    let avaliableLanguage: ilanguages = 'US';

    if(userLanguage.includes('BR'))  avaliableLanguage = 'BR'

    handleSetLanguage(avaliableLanguage)
  }




  useEffect(
    () => {
      handleGetUserLanguage()

      setTimeout(
        () => {
          setLoading(false)
          }, 3000
      )
    }, []
  )

  

  return (
    <>
      <Loading loading={loading}/>

      {/* Loads the modal's image, for not pop up on user's screen! */}
      <link rel="preload" href="https://www.bebold.ch/img/home/macbook-white.png" as="image" className='computer-image'/>

      <Header
        handleSetLanguage={handleSetLanguage}
        language={lang}
        linkNames={info?.headerLinks}
      />
      
      <LandingContainer id="Landing">
        <AboutMe
          aboutMe={info?.pageButtons?.aboutMe}
          myProjects={info?.pageButtons?.myProjects}
        />
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
          close={info?.pageButtons?.closeModal}
          filters={info.filtros}
          title={info.portFolioTitle}
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