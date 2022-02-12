import './Restaurant.css'
import React from 'react'
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import LoadingButton from '@mui/lab/LoadingButton'
import Divider from '@mui/material/Divider'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import MenuItem from '../../data/menu/MenuItem'
import menuData from '../../data/menu/menu-data'
import Menu from '../../data/menu/Menu'

interface MenuSelections {
  [sectionHeader: string]: MenuItem | null,
}

export default function Restaurant() {
  const navigate = useNavigate()
  const initMenuSelections: MenuSelections = {}
  Object.getOwnPropertyNames(menuData).forEach(sectionHeader => {
    initMenuSelections[sectionHeader] = null
  })
  const [menuSelections, setMenuSelections] = React.useState<MenuSelections>(initMenuSelections)
  const [isProcessing, setIsProcessing] = React.useState(false)

  const handleOnSubmit = async () => {
    console.log(menuSelections)
    if (Object.values(menuSelections).every(val => (val !== null))) {
      setIsProcessing(true)
      // Do stuff and nav.
      const htmlMessage = `Hi,
      <br/>
      Jennifer ordered:<br/>
      Appetizer - ${menuSelections.appetizers?.title}<br/>
      Entree - ${menuSelections.entrees?.title}<br/>
      <br/>
      Happy cooking, <br/>
      The interwebs
      `
      try {
        await axios.post('https://us-east1-valentines-day-341020.cloudfunctions.net/email-endpoint', {
          htmlMessage,
        })
      } catch (error) {
        console.log(error)
      }
      setIsProcessing(false)
      navigate('/restaurant/thanks')
    }
  }

  const handleSelectionChange = (sectionHeader: string, menuItem: MenuItem) => {
    setMenuSelections(prevState => {
      prevState[sectionHeader] = menuItem
      return prevState
    })
  }

  return (
    <>
      {Object.getOwnPropertyNames(menuData).map(sectionHeader => (
        <MenuSection header={sectionHeader} items={menuData[sectionHeader as keyof Menu]} key={sectionHeader} onChange={handleSelectionChange} />
      ))}
      <div className='SubmitButtonContainer'>
        <LoadingButton loading={isProcessing} onClick={handleOnSubmit} size='large' variant='outlined'>Place Order</LoadingButton>
      </div>
    </>
  )
}

interface MenuSectionProps {
  header: string,
  items: MenuItem[],
  onChange: (sectionHeader: string, menuItem: MenuItem) => void,
}

function MenuSection(props: MenuSectionProps) {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null)
  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    setSelectedIndex(index)
    props.onChange(props.header, props.items[index])
  }

  const capitalizeHeader = (header: string) => header.charAt(0).toUpperCase() + header.slice(1)

  return (
    <div className='MenuSection'>
      <Typography variant="h5">{capitalizeHeader(props.header)}</Typography>
      <List>
        {props.items.map((item, i) => (<MenuListing key={i} menuItem={item} onClick={(event) => handleMenuItemClick(event, i)} selected={i === selectedIndex} />))}
      </List>
      <Divider />
    </div>
  )
}

interface MenuListingProps extends ListItemButtonProps {
  menuItem: MenuItem
}

function MenuListing(props: MenuListingProps) {
  return (
    <ListItemButton alignItems="center" selected={props.selected} onClick={props.onClick}>
      <ListItemText primary={props.menuItem.title} secondary={props.menuItem.description} />
    </ListItemButton>
  )
}