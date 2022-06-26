
import { Paragraph } from './styles';
import React, { FC, ReactChildren } from 'react';
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

