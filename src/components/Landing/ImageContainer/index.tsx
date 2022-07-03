import LandingImage from '../LandingImage';
import { Aside } from './styles';

export default function ImageContainer(
  { landingImageSrc }: any
) {
  return (
    <>
      <Aside>
        <LandingImage
          imageSrc={landingImageSrc}
        />
      </Aside>
    </>
  );
}

