import React from 'react';

import {  Container } from './styles';

import { BsQuestion } from 'react-icons/bs';
import { ImQuotesLeft } from 'react-icons/im';


export default function FeaturedBlockQuote(
    { quote, author }: any
    ) {
  return (
    <Container>
        <div className='quotes-icon-container'>
            <ImQuotesLeft/>
        </div>

        <blockquote>
          “{quote}“
        </blockquote>
        
        <p className='author'>- {author}</p>
    </Container>
  );
}

