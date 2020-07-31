import React from 'react';
import './App.css';
import Box from "@material-ui/core/Box";
import CssBaseline from '@material-ui/core/CssBaseline';
import {Header,Description,AboutTest,CardsUsersContainer,FormContainer,Footer} from './Components/index';


function App() {
  return (
    <Box component='div' style={{maxWidth: '1024px',margin: '0 auto'}} >
        <CssBaseline/>
        <Header/>
        <Description/>
        <AboutTest/>
        <CardsUsersContainer/>
        <FormContainer/>
        <Footer/>
    </Box>
  );
}

export default App;
