import './ScavengeDone.css'
import Typography from '@mui/material/Typography'

export default function ScavengeDone(){
  return (
    <div className='DoneContainer'>
      <div className='DoneText'>
      <Typography  color="primary" variant="h3" gutterBottom>
        Thank you
      </Typography>
      <Typography variant="h5" gutterBottom>For spending the day with me and being an adventurous person. I love you very much.</Typography>
      <Typography variant="h6" gutterBottom>- Daniel</Typography>
      </div>
    </div>
  )
}