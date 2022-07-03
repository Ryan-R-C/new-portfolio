
import { Container, SocialMedia } from './styles';
import { GrLinkedinOption } from 'react-icons/gr'
import { BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const LandingImage = ({  imageSrc, linkedingLink ,gitHubLink ,emailLink }: { imageSrc:string,  linkedingLink:string ,gitHubLink:string ,emailLink:string}) => {
  return (
    <>
    <Container>
      <SocialMedia>
        <a className="button"  rel="noreferrer" target="_blank" href={linkedingLink}> <GrLinkedinOption/> </a>
        <a className="button"  rel="noreferrer" target="_blank" href={gitHubLink}> <BsGithub/> </a>
        <a className="button"  rel="noreferrer" target="_blank" href={`mailto:${emailLink}`}> <MdEmail/> </a>
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
