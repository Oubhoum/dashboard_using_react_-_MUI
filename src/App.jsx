import { createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import { ThemeProvider } from '@emotion/react';
import getDesignTokens from './theme.jsx';
import { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


export default function MiniDrawer() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = useState(localStorage.getItem("currentMode") === "dark" ? "dark" : "light");
  // const [mode, setMode] = useState(
  //   Boolean(localStorage.getItem("currentMode")) || "dark"
  // );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (

    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <TopBar {...{ open, handleDrawerOpen, setMode }} />

        <SideBar {...{ open, handleDrawerClose }} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

          <Outlet />

        </Box>

      </Box>

    </ThemeProvider>
  );
}