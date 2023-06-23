import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function Form() {

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
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>

          <Typography component="h1" variant="h5">
            Motivo da visita
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="motivo-visita"
              label="opções: rotina e coleta"
              name="motivo-visita"
              autoFocus
            />

          <Typography component="h1" variant="h5">
            Condição do clima nas últimas 24 horas
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="condicaotempo"
              label="opções: ensolarado, nublado e chuvoso"
              name="condicaotempo"
            />
          <Typography component="h1" variant="h5">
            Técnico responsável
          </Typography>
            <TextField
            margin="normal"
            fullWidth
            id="tecnico"
            label="opções checkbox: leandro, nelson, alessandro, mauro e gabriel"
            name="tecnico"
            autoFocus
            />
          <Typography component="h1" variant="h5">
            Efluente bruto - pH
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="efluente-bruto-ph"
              name="efluente-bruto-ph"
            />
          <Typography component="h1" variant="h5">
            Tanque de equalização - pH
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="tanque-equalizacao-ph"
              name="tanque-equalizacao-ph"
            />
          <Typography component="h1" variant="h5">
            Tanque de equalização - Nível
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="tanque-equalizacao-nivel"
              label="opções de 10 a 100%"
              name="tanque-equalizacao-nivel"
            />
          <Typography component="h1" variant="h5">
            Tanque de equalização - Observações
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="tanque-equalizacao-obs"
              name="tanque-equalizacao-obs"
            />

          <Typography component="h1" variant="h5">
            Reator 01 - pH
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="reator-01-ph"
              name="reator-01-ph"
            />
          <Typography component="h1" variant="h5">
            Reator 01 - Limpo?
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="reator-01-limpo"
              label="opção sim ou não"
              name="reator-01-limpo"
            />
          <Typography component="h1" variant="h5">
            Reator 01 - Há vazamento?
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="reator-01-vazamento"
              label="opção sim ou não"
              name="reator-01-vazamento"
            />
          <Typography component="h1" variant="h5">
            Reator 01 - Sólidos (mL/L/h)
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="reator-01-solidos"
              name="reator-01-solidos"
            />

          <Typography component="h1" variant="h5">
            Reator 01 - Situação
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="reator-01-situacao"
              label="opções aerando, decantando, descartando e parado"
              name="reator-01-situacao"
            />
          <Typography component="h1" variant="h5">
            Reator 02 - pH
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="reator-02-ph"
              name="reator-02-ph"
            />
          <Typography component="h1" variant="h5">
            Reator 02 - Limpo?
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="reator-02-limpo"
              label="opção sim ou não"
              name="reator-02-limpo"
            />
          <Typography component="h1" variant="h5">
            Reator 02 - Há vazamento?
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="reator-02-vazamento"
              label="opção sim ou não"
              name="reator-02-vazamento"
            />
          <Typography component="h1" variant="h5">
            Reator 02 - Sólidos (mL/L/h)
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="reator-02-solidos"
              name="reator-02-solidos"
            />

          <Typography component="h1" variant="h5">
            Reator 02 - Situação
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="reator-02-situacao"
              label="opções aerando, decantando, descartando e parado"
              name="reator-02-situacao"
            />
          <Typography component="h1" variant="h5">
            Reatores 01 e 02 - Observações
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="reatores-obs"
              name="reatores-obs"
            />
          <Typography component="h1" variant="h5">
            Efluente tratado - pH
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="efluente-tratado-ph"
              name="efluente-tratado-ph"
            />
            
          <Typography component="h1" variant="h5">
            Efluente tratado - Temperatura
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="efluente-tratado-temperatura"
              name="efluente-tratado-temperatura"
            />

          <Typography component="h1" variant="h5">
            Efluente tratado - Apresenta arraste?
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="efluente-tratado-arraste"
              label="opções arraste de lodo, arraste de solidos finos e sem arraste"
              name="efluente-tratado-arraste"
            />
          <Typography component="h1" variant="h5">
            Efluente tratado - Apresenta odor?
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="efluente-tratado-odor"
              label="opção sim ou não"
              name="efluente-tratado-odor"
            />
          <Typography component="h1" variant="h5">
            Efluente tratado - Vazão na Calha Parshall (m³/h)
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="efluente-tratado-vazao"
              name="efluente-tratado-vazao"
            />
          <Typography component="h1" variant="h5">
            Efluente tratado - Totalização
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="efluente-tratado-totalizacao"
              name="efluente-tratado-totalizacao"
            />
          <Typography component="h1" variant="h5">
            Efluente tratado - Observações
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="efluente-tratado-observacoes"
              name="efluente-tratado-observacoes"
            />
          <Typography component="h1" variant="h5">
            Filtro prensa - Operando normalmente?
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="filtro-prensa"
              label="opcão sim ou não"
              name="filtro-prensa"
            />
          <Typography component="h1" variant="h5">
            Adensador de lodo - Nível
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="adensador-lodo"
              label="opção 10 a 100%"
              name="adensador-lodo"
            />
          <Typography component="h1" variant="h5">
            Caçamba de lodo - Nível
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="cacamba-lodo"
              label="opção 10 a 100%"
              name="cacamba-lodo"
            />
          <Typography component="h1" variant="h5">
            Filtro prensa, adensador e caçamba de lodo - Observações
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="filtro-adensador-cacamba-observacoes"
              name="filtro-adensador-cacamba-observacoes"
            />
          <Typography component="h1" variant="h5">
            Dosagem de químicos - Alcalinizante
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="dosagem-alcalinizante"
              name="dosagem-alcalinizante"
            />
          <Typography component="h1" variant="h5">
            Dosagem de químicos - Acidulante
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="dosagem-acidulante"
              name="dosagem-acidulante"
            />
          <Typography component="h1" variant="h5">
            Dosagem de químicos - Coagulante
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="dosagem-coagulante"
              name="dosagem-coagulante"
            />
          <Typography component="h1" variant="h5">
            Dosagem de químicos - Floculante
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="dosagem-floculante"
              name="dosagem-floculante"
            />
          <Typography component="h1" variant="h5">
            Dosagem de químicos - Antiespumante
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="dosagem-antiespumante"
              name="dosagem-antiespumante"
            />
          <Typography component="h1" variant="h5">
            Galeria Pluvial em conformidade?
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="galeria-pluvial"
              label="opção sim ou não"
              name="galeria-pluvial"
            />
          <Typography component="h1" variant="h5">
            Gerenciamento de Resíduos - Limpeza da área externa em conformidade?
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="residuos-limpeza"
              label="opção sim ou não"
              name="residuos-limpeza"
            />
          <Typography component="h1" variant="h5">
            Gerenciamento de Resíduos - Contaminação de solo visível?
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="residuos-contaminacao"
              label="opção sim ou não"
              name="residuos-contaminacao"
            />
          <Typography component="h1" variant="h5">
            Gerenciamento de Resíduos - Contêineres de Coleta Seletiva em conformidade?
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="residuos-conteiner"
              label="opção sim ou não"
              name="residuos-conteiner"
            />
          <Typography component="h1" variant="h5">
            Gerenciamento de Resíduos - Central de armazenamento em conformidade?
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="residuos-central-armazenamento"
              label="opção sim ou não"
              name="residuos-central-armazenamento"
            />
          <Typography component="h1" variant="h5">
            Portabilidade - Hidrômetro do poço
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="portabilidade-hidrometro"
              name="portabilidade-hidrometro"
            />
          <Typography component="h1" variant="h5">
            Portabilidade - Horímetro do poço
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="portabilidade-horimetro"
              name="portabilidade-horimetro"
            />
          <Typography component="h1" variant="h5">
            Portabilidade - Dosagem de hipoclórito
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="portabilidade-dosagem"
              name="portabilidade-dosagem"
            />
          <Typography component="h1" variant="h5">
            Portabilidade - Medição de cloro na ETE (mg/L)
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="portabilidade-medicao-ete"
              name="portabilidade-medicao-ete"
            />
          <Typography component="h1" variant="h5">
            Portabilidade - Medição de cloro no refeitório (mg/L)
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="portabilidade-medicao-refeitorio"
              name="portabilidade-medicao-refeitorio"
            />
          <Typography component="h1" variant="h5">
            Observações gerais sobre a visita
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="observacoes"
              name="observacoes"
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