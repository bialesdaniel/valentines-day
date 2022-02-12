import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';
import HeartIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">
          <IconButton
            aria-label="home"
            color="inherit"
            edge="start"
            href='/'
            size="large"
            sx={{ mr: 2 }} >
            <HeartIcon />
          </IconButton>
          Valentine's Day
        </Typography>
      </Toolbar>
    </AppBar>
  )
}