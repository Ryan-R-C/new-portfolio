
import { Button } from './styles';
import React, { FC, ReactChildren } from 'react';

const StyledButton
// : FC<IreactProps> 
= ({
  children, 
  href
  }: any ) => {
  return (
    <Button href={href}>
      {children}
    </Button>
  );
}
export default StyledButton

