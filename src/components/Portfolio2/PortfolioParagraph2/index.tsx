
import { Container } from './styles';
import React, { FC, ReactChildren } from 'react';
import IreactProps from '../../../types/IreactProps';

const PortfolioParagraph2: FC<IreactProps> = ({ children }) => {
  return (
    <>
    <Container>
        {children}
    </Container>
    </>
  );
}
export default PortfolioParagraph2

