import './Home.css'
import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import { DinnerDining, Attractions, SvgIconComponent } from '@mui/icons-material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <div className='HomeContainer'>
      <Container>
        <Typography color="primary" gutterBottom variant="h4" >Welcome to Valentine's day 2022 </Typography>
        <Typography variant="body1">
          Get ready for a fun filled day of food and activity. Please start by visiting our restaurant
          site and placing an order for your evening meal.
        </Typography>
      </Container>
      <ButtonGroup variant="text" fullWidth>
        <IconTextButton icon={DinnerDining} label='Restaurant' fullWidth href='/restaurant' />
        <IconTextButton icon={Attractions} label='Fun & Games' fullWidth href='/scavenge' />
      </ButtonGroup>
    </div>
  )
}

interface IconTextButtonProps extends ButtonProps {
  label: string,
  icon: SvgIconComponent,
}

function IconTextButton(buttonProps: IconTextButtonProps) {
  return (
    <Button {...buttonProps}>
      <Stack className='ButtonContent'>
        <buttonProps.icon sx={{ fontSize: 100 }} />
        {buttonProps.label}
      </Stack>
    </Button>
  )
}

