
import {  Container, MainAbout, AsideAbout } from './styles';

const About
= ({ mainAboutTitle, mainAboutText, asideAboutTitle, asideAboutText }: any ) => {
  return (
    <Container>
      <MainAbout>
        <h2>
          {mainAboutTitle}
        </h2>
        {
        mainAboutText?.map(
         (mainParagraph: string, i: number)=> (
            <p key={i}>
              {mainParagraph}
            </p>

          )
        )
        }
      </MainAbout>
      <AsideAbout >
        <h3>
          {asideAboutTitle}
        </h3>
        {
        asideAboutText?.map(
          (paragraphAside: string, i: number) => (
            <p key={i}>
              {paragraphAside}
            </p>
          )
        )
        }
      </AsideAbout>
    </Container>
  );
}
export default About

