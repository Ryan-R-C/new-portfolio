
import { Image, SocialMedia } from './styles';

import { GrLinkedinOption } from 'react-icons/gr'
import { BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'




const PortfolioParagraph = ({ imageLink, imageSrc }: { imageLink: string, imageSrc:string }) => {
  return (
    <>
    <Image
    // href={imageLink}
    >
    <SocialMedia>
      <a href=''> <GrLinkedinOption/> </a>
      <a href=''> <BsGithub/> </a>
      <a href='mailto:someone@yoursite.com'> <MdEmail/> </a>
    </SocialMedia>
        <img
            src={imageSrc}
            alt=""
        />
    </Image>
    </>
  );
}
export default PortfolioParagraph
