import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import HomeIcon from '@mui/icons-material/Home';

import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
    <div>
        <AppBar color=''>
            <Toolbar >
                <Typography align="justify"  sx={{flexGrow: 1}}><Link  style={{color :"black", textDecoration:"none" ,fontFamily:'fantasy'}}  to={"/"}>BLOG</Link></Typography>
                <Button><Link to={"/Home"} style={{color :"Black", textDecoration:"none"}}><HomeIcon/></Link></Button>
                <Button><Link to={"/Add"} style={{color :"Black", textDecoration:"none"}}><AddHomeWorkIcon/></Link></Button>
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default NavBar