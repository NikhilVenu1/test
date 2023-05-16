import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    var [page,setPage] = useState([])
        useEffect(()=>{
            axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response)=>{
                console.log(response.data)
                setPage(response.data)
            })
            .catch((err)=>(console.log(err)))
        },[])
  return (
    <div>
        <br/><br /><br /><br /><Typography variant='h4' style={{fontFamily:'serif'}}><u>ENTERED DATA</u></Typography>
        <TableContainer>
        <Table  align='center' sx={{ maxWidth: 650 }} aria-label="simple table" >
        <TableHead>
            <TableRow>
                <TableCell style={{color: "black"}}>ID</TableCell>
                <TableCell style={{color: "black"}}>TITLE</TableCell>
            
                
            </TableRow>
        </TableHead>
        <TableBody>
        {page.map((value,index)=>{
            return(
                <TableRow>
                <TableCell>{value.id}</TableCell>
                <TableCell>{value.title}</TableCell>
            
                
            </TableRow>
            )
        })}
        </TableBody>
       </Table>
       </TableContainer>
    </div>
        )
}

export default Home