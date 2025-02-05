import {  Container } from './styles';

const themeDeactivated = {
  height: '0vh',
  displayIcon: 'none',
}

export default function Loading(
    { loading }: any
    ) {
  return (
    <Container theme={ !loading && themeDeactivated }>
      <div className="loading-spinner"/>
    </Container>
  );
}

