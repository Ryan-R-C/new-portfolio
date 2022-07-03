import LandingImage from '../LandingImage';
import { Aside } from './styles';

export default function ImageContainer(
  { landingImageSrc, linkedingLink ,gitHubLink ,emailLink}: any
) {
  return (
    <>
      <Aside>
        <LandingImage
          imageSrc={landingImageSrc}
          linkedingLink={linkedingLink}
          gitHubLink={gitHubLink}
          emailLink={emailLink}
          
        />
      </Aside>
    </>
  );
}

