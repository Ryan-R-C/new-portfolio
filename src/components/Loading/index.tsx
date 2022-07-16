import React from 'react';

import {  Container } from './styles';

import { BsQuestion } from 'react-icons/bs';
import { ImQuotesLeft } from 'react-icons/im';

const themeDeactivated = {
  height: '0vh',
  displayIcon: 'none',
}

export default function Loading(
    // { loading }: {loading: boolean}
    { loading }: any
    ) {
  return (
  // loading && 
    // <Container className={loading && `unnactive`}>
    <Container theme={ !loading && themeDeactivated }>
      <div className="loading-spinner"/>
    </Container>
  );
}

