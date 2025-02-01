import { Container } from './styles';


export default function AnimatedArrow(
  { text, }: any
) {
  return (
    <Container>
      <div className="animated-arrow" >
        <span className="the-arrow -left">
          <span className="shaft"></span>
        </span>
        <span className="main">
          <span className="text">
            {text}
          </span>
          <span className="the-arrow -right">
            <span className="shaft"></span>
          </span>

        </span>
      </div>
      
    </Container>
  );
}

