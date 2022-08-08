import React from 'react';
import './NavBar.css';
import Logo from './Logo.png';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HealingIcon from '@mui/icons-material/Healing';

const NavBar = () => {
    return(
        <div className="NavBar">
            <div className="NavLeftContainer">
            <div className="NavTitle"><img src={Logo} alt="MediCare Logo"/> MediCare</div>
            </div>
            <div className="NavRightContainer">
                <a href="" className="LoginButton">Login as Patient</a>
                <a href="" className="LoginButton">Login as Doctor</a>
            </div>
        </div>
        // <div className="NavBar">
        //     <Box sx={{ flexGrow: 1 }}>
        //         <AppBar position="static">
        //             <Toolbar>
        //                 <HealingIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        //                 <Typography 
        //                     variant="h6" 
        //                     component="div" 
        //                     sx={{ flexGrow: 1 }}
        //                 >
        //                     MediCare
        //                 </Typography>
        //                 <Button color="inherit">Login as Patient</Button>
        //                 <Button color="inherit">Login as Doctor</Button>
        //             </Toolbar>
        //         </AppBar>
        //     </Box>
        // </div>
    );
}

export default NavBar;