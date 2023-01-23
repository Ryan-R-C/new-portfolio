
import { Button } from './styles';
import React, { FC, ReactChildren } from 'react';

const StyledButtonModal
// : FC<IreactProps> 
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

