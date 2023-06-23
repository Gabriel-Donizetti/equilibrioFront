import { ThemeProvider } from '@emotion/react';
import { AppBar, Box, Card, CardActionArea, CardContent, Container, CssBaseline, Grid, Stack, Toolbar, Typography, createTheme } from '@mui/material';
import style from './styles.module.scss'
import CreateCompanyDialog from './CreateCompanyDialog';
import api from '../../services/api';

const defaultTheme = createTheme();

interface Empresa {
    nome: string
    endereco: string
    userID: string
    id: string
    }

const result = await api.get('user/listCompanys');

const Empresas: Array<Empresa> = result.data;

export function CompanyLists() {

    return(
        <div id={style.container}>
            <ThemeProvider theme={defaultTheme}>
                <Container> 
                    <CssBaseline />
                    <Box
                        sx={{
                        p: 1,
                        m: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        }}
                    >
                        <Box sx={{ display: 'flex' }} flexDirection="column">
                            <AppBar 
                                style={{ background: '#44597d' }}
                                position="fixed"
                                sx={{
                                width: { sm: `calc(100%)` },
                        }}>
                                <Toolbar>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        Equilíbrio
                                    </Typography>
                                </Toolbar>
                            </AppBar>

                            <Stack marginTop={12} marginBottom={3} direction="row" spacing={2}>
                            <Typography component="h1" variant="h5">
                                Selecione a empresa 
                            </Typography>
                            <CreateCompanyDialog />
                            </Stack>
                            
                            <Grid container spacing={{ xs: 2, md:3}} columns={{ xs: 4, sm:8, md:16}}>
                            {Empresas.map((empresa, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                            <Card 
                                style={{ borderColor: '#44597d' }}
                                    sx={{
                                        maxWidth: 345,
                                        maxHeight: 345,
                                        minWidth: 145,
                                        minHeight: 135,
                                        border: '2px solid #1976d2',
                                        backgroundColor: '#f2f7ff',
                                        margin: '5px' }}>
                            <CardActionArea href={"/dashboard/" + empresa.id + "/" + empresa.nome}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {empresa.nome}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {empresa.endereco}
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            </Card>
                            </Grid>
                            ))}
                            </Grid>
                    </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>   
    );
}