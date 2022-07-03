
import { Image } from './styles';

const PortfolioImage2 = ({ imageLink, imageSrc, title }: { imageLink: string, imageSrc:string, title?: string }) => {
  return (
    <>
    <Image href={imageLink}>
        <div>
          {/* <h2>
          {title}
          </h2> */}
          <img
              src={imageSrc}
              alt=""
          />
        </div>
    </Image>
    </>
  );
}
export default PortfolioImage2;
