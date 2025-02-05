import CoursesProps from "../../components/CoursesProps";
//@ts-ignore
import { Container } from "./styles";


export default function Courses({ props }: any) {


  return (
    <>
      <Container>

        <h2>
          Skills
        </h2>

        {
          props?.map(
            (prop: any, index: number) => (
              <CoursesProps
                title={prop.title}
                text={prop.text}
                direction={index % 2 ? "row-reverse" : "row"}
                iconImageSrc={prop.iconImageSrc}
                mainColor={prop.mainColor}
                secondaryColor={prop.secondaryColor}
              >
              </CoursesProps>

            )
          )
        }



      </Container>


    </>
  );
}

