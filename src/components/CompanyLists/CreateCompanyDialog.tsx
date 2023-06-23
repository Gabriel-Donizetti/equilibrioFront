import api from "../../services/api"
import { useState } from "react"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#44597d',
    },
  },
});

export default function CreateCompanyDialog() {

    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    async function sendPost() {

        const userID = 'f5f2addc-1596-475a-bf62-bb087947737b'

        try {
            setOpen(false);

            await api.post('/user/createcompany', {
                nome, endereco, userID
            }).then(status => {
                if (status.status == 200) {
                    setNome('')
                    setEndereco('')

                    return console.log(status.status)
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
      <div>
        <ThemeProvider theme={theme}>
        <Button color="primary" variant="contained" onClick={handleClickOpen}>
          Inserir nova empresa
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Insira os dados da empresa</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="nome"
              value={nome}
              onChange={e => {
                setNome(e.target.value)
              }}
              label="Nome da empresa"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="endereco"
              value={endereco}
              onChange={e => {
                setEndereco(e.target.value)
              }}
              label="Endereço da empresa"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={sendPost} href="/">Confirmar</Button>
          </DialogActions>
        </Dialog>
        </ThemeProvider>
      </div>
    );
  }