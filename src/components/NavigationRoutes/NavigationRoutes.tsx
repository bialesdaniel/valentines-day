import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Restaurant from '../Restaurant/Restaurant'
import ScavengeGetReady from '../ScavengeGetReady/ScavengeGetReady'
import OrderThankYou from '../OrderThankYou/OrderThankYou'
import ScavengerHunt from '../ScavengerHunt/ScavengerHunt'
import ScavengeDone from '../ScavengeDone/ScavengeDone'

export default function NavigationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/restaurant/thanks" element={<OrderThankYou />} />
      <Route path="/scavenge" element={<ScavengeGetReady />} />
      <Route path="/scavenge/done" element={<ScavengeDone />} />
      <Route path="/scavenge/:locationId" element={<ScavengerHunt />} />
    </Routes>
  )
}