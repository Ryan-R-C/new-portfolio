
import { Button } from './styles';

const StyledButtonModal
= ({
  children, 
  onClick
  }: any ) => {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  );
}
export default StyledButtonModal

