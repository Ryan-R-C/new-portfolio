import { IoIosArrowForward } from 'react-icons/io';
import ComputerContainer from '../../ComputerContainer';
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
            
            <ComputerContainer
            imgSrc={imgSrc}
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
              <div className='wraped-content'>
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
            </div>
            ) 
          )
          }

            <h3>{techs?.title}</h3>
            <ul>
            {
            techs?.list?.map(
              (tech: any, i: number) => (
                <li key={i} >&bull; {tech} </li>
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
