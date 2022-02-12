import './ScavengerHunt.css'
import React from 'react'
import Typography from '@mui/material/Typography'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton';
import { getLocation, checkLocationDistance } from '../../service/geolocation'
import locationsData from '../../data/scavenger-hunt/scavenger-hunt-data'
import Coordinates from '../../data/scavenger-hunt/Coordinates'

const DISTANCE_FORGIVENESS = 300
const HINT_EASTER_EGG_CLICKS = 15

export default function ScavengerHunt() {
  const navigate = useNavigate()
  const params = useParams()
  const locationId = parseInt(params.locationId ?? "0")
  const location = locationsData[locationId]

  const [isShowHint, setIsShowHint] = React.useState(false)
  const [isProcessing, setIsProcessing] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState('')
  const [currentDistance, setCurrentDistance] = React.useState(0)
  const [hintClicks, setHintClicks] = React.useState(0)

  const handleShowHint = () => {
    setHintClicks(hintClicks + 1)
    setIsShowHint(true)
    if (hintClicks > HINT_EASTER_EGG_CLICKS) {
      goToNextLocation()
    }
  }

  const goToNextLocation = () => {
    const nextLocationPath = locationId === locationsData.length - 1 ? '/scavenge/done' : `/scavenge/${locationId + 1}`
    setIsShowHint(false)
    setHintClicks(0)
    setErrorMsg('')
    setIsProcessing(false)
    setCurrentDistance(0)
    navigate(nextLocationPath)
  }

  const handleGetLocationSuccess = (position: GeolocationPosition) => {
    const currentLocation = new Coordinates(position.coords.latitude, position.coords.longitude)
    const distance = checkLocationDistance(currentLocation, location.coordinates)
    console.log(distance)
    if (distance < DISTANCE_FORGIVENESS) {
      goToNextLocation()
    } else {
      setCurrentDistance(Math.floor(distance))
    }
    setIsProcessing(false)
  }

  const handleGetLocationError = (error: GeolocationPositionError) => {
    setErrorMsg(error.message)
    setIsProcessing(false)
  }

  const handleGetLocationUnavailable = (msg: string) => {
    setErrorMsg(msg)
    setIsProcessing(false)
  }

  const handleCheckAnswer = () => {
    setIsProcessing(true)
    getLocation(handleGetLocationSuccess, handleGetLocationError, handleGetLocationUnavailable)
  }

  return (
    <div className="ScavengeContainer">
      <div className="ClueContainer">
        <Typography variant="h6">{location.clue}</Typography>
      </div>

      <div className='HintContainer'>

        {isShowHint &&
          <Typography variant="body1">{location.hint}</Typography>
        }
      </div>

      <div className='ButtonContainer'>

        {currentDistance > DISTANCE_FORGIVENESS && <Typography gutterBottom>Good guess. You are {currentDistance} meters away.</Typography>}
        {errorMsg && <Typography>{errorMsg}</Typography>}
        <ButtonGroup fullWidth size='large'>
          <Button color='secondary' disabled={isProcessing} onClick={handleShowHint}>Hint</Button>
          <LoadingButton loading={isProcessing} onClick={handleCheckAnswer} variant="contained">I'm here</LoadingButton>
        </ButtonGroup>
      </div>
    </div>
  )
}