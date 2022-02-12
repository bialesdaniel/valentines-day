import './OrderThankYou.css'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function OrderThankYou(){
  return (
    <div className='ThanksContainer'>
      <div className='ThanksText'>
      <Typography  color="primary" variant="h3" gutterBottom>
        Thank you!
      </Typography>
      <Typography variant="h5">We can't wait to serve you.</Typography>
      </div>
      <div className="FunButton">
      <Button className='FunButton' href='/scavenge' size='large' variant='contained'>Time for fun!</Button>
      </div>
    </div>
  )
}