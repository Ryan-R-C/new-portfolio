
import { Image } from './styles';

const PortfolioImage = ({ imageLink, imageSrc }: { imageLink: string, imageSrc:string }) => {
  return (
    <>
    <Image href={imageLink}>
        <img
            src={imageSrc}
            alt=""
        />
    </Image>
    </>
  );
}
export default PortfolioImage;
