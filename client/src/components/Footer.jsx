import React from "react"
import { Link } from "react-router-dom"

import videoegypt2 from '/image/videoegypt2.mp4'

// MUI //
import Card from '@mui/material/Card'
import CardContent from "@mui/material/CardContent"
import Box from '@mui/material/Box'

function Footer(){
    return (
        <section className="footer">
  <div className="videoDiv">
    <video src={videoegypt2} loop autoPlay muted type="video/mp4"></video>
  </div>
  <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: 'auto', padding: '2rem' }}>
    <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '1rem' }}>
      <div className="footer-content">
        <CardContent className="footer-left">
          This is an all-in-one informational website for wanderlust people looking for information on the latest and greatest ways to travel. Here you will be able to find visa information, get some advice, and save options for future exploration. Welcome and make an account.
        </CardContent>
        <CardContent className="footer-right">
          <Box className="footer-links" sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Link className="footer_inner" to="/">Home</Link>
            <Link className="footer_inner" to="/destinations">Destinations</Link>
            <Link className="footer_inner" to="/favorites">Favorites</Link>
            <Link className="footer_inner" to="/newsletter">Newsletter</Link>
            <Link className="footer_inner" to="/userPanel">Login</Link>
          </Box>
        </CardContent>
      </div>
    </Card>
  </Box>
</section>

      
    )
}

export default Footer