import { Aside } from './styles';


export default function ImageContainerCourse(
    { landingImageSrc, direction }: any
    ) {

  
  return (
    < >
      <Aside>
          <div>
            <img
            alt='A photograph of me'
            className={
              direction !== 'row' ? (
                "reverse-row"
                ) : (
                "row"
              )
            }
            src={landingImageSrc}
            />
          </div>
      </Aside>
      </>
  );
}

