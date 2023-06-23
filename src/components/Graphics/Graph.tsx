import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function Graph() {

  return (
    <div className="chart-container">
      <ThemeProvider theme={defaultTheme}>
        <Container> 
        <CssBaseline />

        </Container>
      </ThemeProvider>
    </div>
  );
}

      