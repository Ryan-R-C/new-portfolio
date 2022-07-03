
import { Container, SocialMedia } from './styles';

import { GrLinkedinOption } from 'react-icons/gr'
import { BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'




const LandingImage = ({  imageSrc }: { imageSrc:string }) => {
  return (
    <>
    <Container>
      <SocialMedia>
        <a className="button" href=''> <GrLinkedinOption/> </a>
        <a className="button" href=''> <BsGithub/> </a>
        <a className="button" href='mailto:someone@yoursite.com'> <MdEmail/> </a>
      </SocialMedia>
          <img
              src={imageSrc}
              alt=""
          />
      </Container>
    </>
  );
}
export default LandingImage
