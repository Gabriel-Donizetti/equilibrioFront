import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import ExitToApp from '@mui/icons-material/ExitToApp';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/icons-material';
import Form from '../../Form/Form';
import { useParams } from 'react-router-dom';
import Graph from '../Graphics/Graph';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {

  const { id, nome } = useParams();

  const { window } = props;

  const [isForm, setIsForm] = useState(false);

  const [isGraph, setIsGraph] = useState(true);

  const setarForm = () => {
    setIsForm(true)
    setIsGraph(false)
  }

  const setarGraph = () => {
    setIsGraph(true)
    setIsForm(false)
  }

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
    <Box 
      marginTop={2.5} 
      marginBottom={-6.5} 
      sx={{ mr: 2, display: 'flex', justifyContent: 'center'}}
      style={{ color: '#44597d'}}
      >
      <Typography variant="h5">
        Equilíbrio
      </Typography>
    </Box>
    <Toolbar />
    <Divider />
    <List>
    <ListItem key="Gráfico" disablePadding>
        <ListItemButton onClick={setarGraph}>
          <ListItemIcon>
            <BarChart />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>
      <ListItem key="Formulário" disablePadding>
        <ListItemButton onClick={setarForm}>
          <ListItemIcon>
            <FormatAlignLeftIcon />
          </ListItemIcon>
          <ListItemText primary="Formulário" />
        </ListItemButton>
      </ListItem>
      <ListItem key="Licenças" disablePadding>
        <ListItemButton onClick={setarForm}>
          <ListItemIcon>
            <FormatAlignLeftIcon />
          </ListItemIcon>
          <ListItemText primary="Licenças" />
        </ListItemButton>
      </ListItem>
     
    </List>
    <Divider />
    <List>
      <ListItem key="Sair" disablePadding>
        <ListItemButton href="/">
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItemButton>
      </ListItem>
    </List>
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        style={{ background: '#44597d' }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {nome}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {isForm && <Form/>}
      {isGraph && <Graph/>}
    </Box>
  );
}