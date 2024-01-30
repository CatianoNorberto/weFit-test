import CircularProgress from '@mui/material/CircularProgress';

import { Container } from './styles'

function Loading() {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
}

export default Loading;