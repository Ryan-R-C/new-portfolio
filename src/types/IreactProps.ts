import { ReactChild, ReactChildren } from 'react';

export default interface IreactProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[] | JSX.Element[] | JSX.Element
}