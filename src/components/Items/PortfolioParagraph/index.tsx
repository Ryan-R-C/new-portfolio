
import { Paragraph } from './styles';
import { FC } from 'react';
import IreactProps from '../../../types/IreactProps';

const PortfolioParagraph: FC<IreactProps> = ({ children }) => {
  return (
    <>
    <Paragraph>
        {children}
    </Paragraph>
    </>
  );
}
export default PortfolioParagraph

