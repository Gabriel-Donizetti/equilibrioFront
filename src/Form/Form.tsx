import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';

const defaultTheme = createTheme();

const Opcoes = [
  'Reator 01',
  'Reator 02',
  'Reator 03',
  'Reator 04',
  'Reator 05',
  'Reator 06',
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
};

export default function Form() {

  const [opcoes, setOpcoes] = React.useState([]);

  const handleChange = (event: { target: { value: any; }; }) => {
    const {
      target: { value },
    } = event;
    setOpcoes(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleSubmit = (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
  };

  return (
    <div style={{ width: '100%'}}>
         <ThemeProvider theme={defaultTheme}>
      <Container> 
        <CssBaseline />
        <Box style={{ color: '#44597d' }}
          sx={{
            input: { color: '#44597d'},
            p: 1,
            m: 1,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
          }}
        >
          <Typography component="h1" variant="h5">
            Informações Básicas
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>
            <TextField
              margin="normal"
              fullWidth
              id="tecnico"
              label="Técnico Equilíbrio"
              name="tecnico"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              id="condicaotempo"
              label="Condição do tempo nas últimas 24 horas"
              name="condicaotempo"
            />
          
          <Typography component="h1" variant="h5">
            Dosagem de Acidulante
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="dosagem-acidulante"
              label="Dosagem"
              name="dosagem-acidulante"
            />
            <TextField
              margin="normal"
              fullWidth
              id="ponto-dosagem-acidulante"
              label="Ponto de dosagem"
              name="ponto-dosagem-acidulante"
            />
            <TextField
              margin="normal"
              fullWidth
              id="estoque-acidulante"
              label="Estoque"
              name="estoque-acidulante"
            />
            <TextField
              margin="normal"
              fullWidth
              id="produto-utilizado-acidulante"
              label="Produto Utilizado"
              name="produto-utilizado-acidulante"
            />

          <Typography component="h1" variant="h5">
            Dosagem de Coagulante
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="dosagem-coagulante"
              label="Dosagem"
              name="dosagem-coagulante"
            />
            <TextField
              margin="normal"
              fullWidth
              id="ponto-dosagem-coagulante"
              label="Ponto de dosagem"
              name="ponto-dosagem-coagulante"
            />
            <TextField
              margin="normal"
              fullWidth
              id="estoque-coagulante"
              label="Estoque"
              name="estoque-coagulante"
            />
            <TextField
              margin="normal"
              fullWidth
              id="produto-utilizado-coagulante"
              label="Produto Utilizado"
              name="produto-utilizado-coagulante"
            />

          <Typography component="h1" variant="h5">
            Dosagem de Hipoclorito
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="dosagem-hipoclorito"
              label="Dosagem"
              name="dosagem-hipoclorito"
            />
            <TextField
              margin="normal"
              fullWidth
              id="ponto-dosagem-hipoclorito"
              label="Ponto de dosagem"
              name="ponto-dosagem-hipoclorito"
            />
            <TextField
              margin="normal"
              fullWidth
              id="estoque-hipoclorito"
              label="Estoque"
              name="estoque-hipoclorito"
            />
            
          <Typography component="h1" variant="h5">
            Caixa de recalque
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="nivel-recalque"
              label="Nível"
              name="nivel-recalque"
            />
            <TextField
              margin="normal"
              fullWidth
              id="ph-recalque"
              label="PH"
              name="ph-recalque"
            />

          <Typography component="h1" variant="h5">
            Tanque de Equalização
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="nivel-equalizacao"
              label="Nível"
              name="nivel-equalizacao"
            />
            <TextField
              margin="normal"
              fullWidth
              id="ph-equalizacao"
              label="PH"
              name="ph-equalizacao"
            />

          <Typography component="h1" variant="h5">
            Reatores
          </Typography>
          
          <div>
          <FormControl sx={{ m: 0, width: '100%' }}>
            <InputLabel id="multiple-checkbox-label">Qtd</InputLabel>
            <Select
              labelId="multiple-checkbox-label"
              id="multiple-checkbox"
              multiple
              value={opcoes}
              onChange={handleChange}
              input={<OutlinedInput label="Opções" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {Opcoes.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={opcoes.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          </div>
          
          <Typography component="h1" variant="h5">
            Reator 01
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="solidos-reator-01"
              label="Sólidos"
              name="solidos-reator-01"
            />
            <TextField
              margin="normal"
              fullWidth
              id="ph-reator-01"
              label="PH"
              name="ph-reator-01"
          />

          {/* <Typography component="h1" variant="h5">
            Reator 01
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="solidos-reator-01"
              label="Sólidos"
              name="solidos-reator-01"
            />
            <TextField
              margin="normal"
              fullWidth
              id="ph-reator-01"
              label="PH"
              name="ph-reator-01"
            />

          <Typography component="h1" variant="h5">
            Reator 02
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="solidos-reator-02"
              label="Sólidos"
              name="solidos-reator-02"
            />
            <TextField
              margin="normal"
              fullWidth
              id="ph-reator-02"
              label="PH"
              name="ph-reator-02"
            />

          <Typography component="h1" variant="h5">
            Reator 03
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="solidos-reator-03"
              label="Sólidos"
              name="solidos-reator-03"
            />
            <TextField
              margin="normal"
              fullWidth
              id="ph-reator-03"
              label="PH"
              name="ph-reator-03"
            />

          <Typography component="h1" variant="h5">
            Reator 04
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="solidos-reator-04"
              label="Sólidos"
              name="solidos-reator-04"
            />
            <TextField
              margin="normal"
              fullWidth
              id="ph-reator-04"
              label="PH"
              name="ph-reator-04"
            />

          <Typography component="h1" variant="h5">
            Reator 05
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="solidos-reator-05"
              label="Sólidos"
              name="solidos-reator-05"
            />
            <TextField
              margin="normal"
              fullWidth
              id="ph-reator-05"
              label="PH"
              name="ph-reator-05"
            />

          <Typography component="h1" variant="h5">
            Reator 06
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="solidos-reator-06"
              label="Sólidos"
              name="solidos-reator-06"
            />
            <TextField
              margin="normal"
              fullWidth
              id="ph-reator-06"
              label="PH"
              name="ph-reator-06"
            /> */}

          <Typography component="h1" variant="h5">
            Efluente tratado
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="ph-efluente"
              label="PH"
              name="ph-efluente"
            />
            <TextField
              margin="normal"
              fullWidth
              id="arraste-lodo"
              label="Arraste de lodo"
              name="arraste-lodo"
            />
            <TextField
              margin="normal"
              fullWidth
              id="vazao-calha-efluente"
              label="Vazão na Calha Parshall Litros/s"
              name="vazao-calha-efluente"
            />
            <TextField
              margin="normal"
              fullWidth
              id="retrolavagem-efluente"
              label="Realizada retrolavagem do filtro"
              name="retrolavagem-efluente"
            />

          <Typography component="h1" variant="h5">
            Medidor de vazão ETE (Totalizador)
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="totalizador"
              label="Totalizador"
              name="totalizador"
            />
            <TextField
              margin="normal"
              fullWidth
              id="vazao-totalizador"
              label="Vazão no Totalizador (m³/h)"
              name="vazao-totalizador"
            />

          <Typography component="h1" variant="h5">
            Hidrômetros dos Descartes
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="hidrometro-cuc"
              label="01 Hidrômetro da CUC"
              name="hidrometro-cuc"
            />
          <TextField
              margin="normal"
              fullWidth
              id="hidrometro-pintura"
              label="03 Hidrômetro da Pintura"
              name="hidrometro-pintura"
            />

          <Typography component="h1" variant="h5">
            Hidrômetro Poço
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="hidrometro-poco"
              label="Hidrômetro Poço"
              name="hidrometro-poco"
            />
            <TextField
              margin="normal"
              fullWidth
              id="horimetro-poco"
              label="Horímetro da bomba do poço"
              name="horimetro-poco"
            />

          <Typography component="h1" variant="h5">
            Cloro
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="ponto-analise"
              label="Ponto de análise"
              name="ponto-analise"
            />
            <TextField
              margin="normal"
              fullWidth
              id="valor-cloro"
              label="Valor"
              name="valor-cloro"
            />  
            <TextField
              margin="normal"
              fullWidth
              id="ph-poco-cloro"
              label="pH Poço"
              name="ph-poco-cloro"
            />

          <Typography component="h1" variant="h5">
            Lodo
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="descartando-lodo"
              label="Descartando"
              name="descartando-lodo"
            />
            <TextField
              margin="normal"
              fullWidth
              id="filtro-lodo"
              label="Filtro prensa ok?"
              name="filtro-lodo"
            />
            <TextField
              margin="normal"
              fullWidth
              id="nivel-lodo"
              label="Nível caçamba"
              name="nivel-lodo"
            />

            <Button
              style={{ background: '#44597d' }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>   
  );
}