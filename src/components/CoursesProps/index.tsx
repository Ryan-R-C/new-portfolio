import ImageContainerCourse from "../Landing/ImageContainerCourse";
import { Container, ContainerText, ContaneirImage } from "./styles";


export default function CoursesProps({ title, text, iconImageSrc, direction, mainColor, secondaryColor }: any) {
  return (
    <>
      <Container
        style={
          {
            flexDirection: direction,
          }
        }
      >
        <ContainerText>
          <h3>{title}</h3>
          {
            text.map(
              (textProp: any) => (
                <p>
                  {textProp}
                </p>
              )
            )
          }
        </ContainerText>

        <ContaneirImage
          style={
            {
              backgroundImage: `linear-gradient(139deg, ${mainColor} 0%,${secondaryColor} 100%)`,
            }
          }

          className={direction === 'row' ? "row" : 'reserse-row'}
        >

          <ImageContainerCourse
            landingImageSrc={iconImageSrc}
            direction={direction}
          />

        </ContaneirImage>
      </Container>
    </>
  );
}

