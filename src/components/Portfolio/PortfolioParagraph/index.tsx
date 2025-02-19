
import { Container } from './styles';
import { FC } from 'react';
import IreactProps from '../../../types/IreactProps';

const PortfolioParagraph: FC<IreactProps> = ({ children }) => {
  return (
    <>
    <Container>
        {children}
    </Container>
    </>
  );
}
export default PortfolioParagraph

