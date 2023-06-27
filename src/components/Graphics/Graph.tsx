import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
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
},
{
  name: 'teste 2',
  data: [1, 3 , 55, 22, 66, 102]
}
]

const defaultTheme = createTheme();

export default function Graph() {

  return (
    <div className="chart-container">
      <ThemeProvider theme={defaultTheme}>
        <Container> 
        <CssBaseline />
        <ReactApexChart options={options} type='bar'width={'900'} height={'500'} series={series}/>
        </Container>
      </ThemeProvider>
    </div>
  );
}

      