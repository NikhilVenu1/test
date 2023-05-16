import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import axios from 'axios'
const Add = () => {
  return (
    <div>
      <Container maxWidth='md'>
        <Box sx={{marginTop:'25%',marginLeft:'25%',height:'60vh', width:'60vh',bgcolor:'#b0bec5'}}>
        <br/><br/><br/> <br/><br/>
    <Typography variant='h2' style={{color:"black" , fontFamily:"serif"}} ><u>BLOG INFO</u></Typography>
    <br/><br/>
    <TextField label="Enter Blog Name" name='name' variant='outlined' color='success'></TextField>
    <br/><br/>
    <TextField label="Enter Description" name='desc' variant='outlined' color='success'></TextField>.
    <br/><br/>
    <TextField label="Enter Author Name" name='auth' variant='outlined' color='success'></TextField>
    <br/><br/>
    <Button variant='contained' color='success'>submit</Button>
    </Box>
    </Container>
    </div>
  )
}

export default Add
