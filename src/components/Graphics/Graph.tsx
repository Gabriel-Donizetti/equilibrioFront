import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const options: ApexOptions = {
  chart: {
    zoom: {
      enabled: false
    }
  },
};

const series = [{

  name: 'Teste',
  data: [31, 40, 28, 51, 42, 109, 100]
}, ]

const defaultTheme = createTheme();

export default function Graph() {

  return (
    <div className="chart-container">
      <ThemeProvider theme={defaultTheme}>
        <Container> 
        <CssBaseline />
        <ReactApexChart options={options} type='bar' height={500} width={700} series={series}/>
        </Container>
      </ThemeProvider>
    </div>
  );
}

      