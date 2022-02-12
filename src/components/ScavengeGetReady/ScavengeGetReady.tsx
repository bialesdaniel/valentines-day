import './ScavengeGetReady.css'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function ScavengeGetReady() {
  return (
    <div className='GetReadyContainer'>
      <div className='HeaderContainer'>
        <Typography variant="h4" gutterBottom>Are you ready for a scavenger hunt?</Typography>
      </div>
      <div className='RequirementsContainer'>
        <Typography variant="overline">You will need:</Typography>
        <Typography variant="body1">Charlie card</Typography>
        <Typography>*Mask*</Typography>
        <Typography variant="body1">This phone</Typography>
        <Typography variant="body1">To take pictures</Typography>
        <Typography variant="body1">*Walking shoes*</Typography>
        <Typography variant="body1">*Water*</Typography>
      </div>
      <div className='ActionContainer'>
        <Button variant="contained" size='large' href='/scavenge/0'>Let's Start!</Button>
      </div>
    </div>
  )
}