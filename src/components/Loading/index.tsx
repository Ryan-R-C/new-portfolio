import {  Container } from './styles';

const themeDeactivated = {
  height: '0vh',
  displayIcon: 'none',
}

export default function Loading(
    // { loading }: {loading: boolean}
    { loading }: any
    ) {
  return (
    <Container theme={ !loading && themeDeactivated }>
      <div className="loading-spinner"/>
    </Container>
  );
}

