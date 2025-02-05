
import { Button } from './styles';

const StyledButton
= ({
  children, 
  href
  }: any ) => {
  return (
    <Button href={href} target="_blank">
      {children}
    </Button>
  );
}
export default StyledButton

