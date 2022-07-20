import React from 'react'
import "./Hero.scss";
import Button from '@mui/material/Button'

const Hero = () => {
  return (
    <div className='hero-Container'>
        <h3>
        EMPOWERING YOUTH THROUGH CAPACITY BUILDING.
        </h3>
        <p>Counselling services that nurture, support and entertain young minds.</p>
        <Button variant="contained">
          Register
        </Button>
    </div>
  )
}

export default Hero