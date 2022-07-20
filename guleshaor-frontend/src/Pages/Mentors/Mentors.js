import { Grid } from '@mui/material'
import React from 'react'
import users from '../../users'
import "./Mentors.scss"
import Users from '../../components/Users/Users'

const Mentors = () => {
  return (
    
        <Grid container spacing={2} style={{padding:"6rem 2rem"}} alignItems="center" justifyContent="space-evenly">
            {users.map((user)=>(
                <Grid key={user.id} item sm={6} md={4} lg={3}>
                    <Users user={user} />
                </Grid>
            ))}
        </Grid>
    
  )
}

export default Mentors