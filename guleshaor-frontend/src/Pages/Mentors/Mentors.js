import { Grid } from '@mui/material'
import React, {useEffect, useState} from 'react'
// import users from '../../users'
import "./Mentors.scss"
import Users from '../../components/Users/Users'
import axios from 'axios'

const Mentors = () => {
    const [mentors, setMentors] = useState([]);
    useEffect(() => {
      const fetchMentors = async () => {
        const {data} = await axios.get('/api/users');
        setMentors(data);
      }

      fetchMentors();
    }, [])
    
  return (
        <Grid container spacing={2} style={{padding:"6rem 2rem"}} alignItems="center" justifyContent="space-evenly">
            {mentors.map((mentor)=>(
                <Grid key={mentor.id} item sm={6} md={4} lg={3}>
                    <Users mentor={mentor} />
                </Grid>
            ))}
        </Grid>
  )
}

export default Mentors