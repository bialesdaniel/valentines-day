import './App.css';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
import Header from '../Header/Header'
import theme from '../../theme/base-theme'
import NavigationRoutes from '../NavigationRoutes/NavigationRoutes';

export default function App() {
  return (

    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className='App'>
            <Header />
            <div className='AppContentContainer'>
              <NavigationRoutes />
            </div>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  )
}
