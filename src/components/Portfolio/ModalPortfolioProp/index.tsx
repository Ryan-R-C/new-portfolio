
import { FiArrowDownRight, FiArrowRight } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import { IndexedAccessType } from 'typescript';
import AnimatedArrow from '../../AnimatedArrow';
import StyledButton from '../../StyledButton';
import { Container, ContentContainer, FlexContainer } from './styles';

const ModalPortfolioProp = (
  { title, infos, link, linkTitle, techs, imgSrc }: any
  ) => {
  return (
    <>
      <Container>
          <FlexContainer>
            <aside>
              <img
                  src={imgSrc}
                  alt=""
              />
            </aside>
            <article>
              <h2>
              { title }
              </h2>

              <StyledButton href={link}>
                  {linkTitle}
                  <IoIosArrowForward/>
              </StyledButton>
            </article>
          </FlexContainer>

          <ContentContainer>
          {
          infos?.map(
            (info: any, i: number) => (
              <>
                <h3>
                  {info?.title}
                </h3>
                {
                info?.text?.map(
                  (text: string, itech: number) => (
                    <p key={itech}>
                      {text}
                    </p>
                  )
                )
                }
            </>
            ) 
          )
          }

            <h3>{techs?.title}</h3>
            <ul>
            {
            techs?.list?.map(
              (tech: any, i: number) => (
                <li key={i} > {tech} </li>
              )
            )
            }
            </ul>
          </ContentContainer>
      </Container>
    </>
  );
}
export default ModalPortfolioProp;
