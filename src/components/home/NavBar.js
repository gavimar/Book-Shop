import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, IconButton, Button} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



const useStyles = makeStyles(theme => ({

   
        offset: theme.mixins.toolbar,
      

    menuButton: {
        marginRight: theme.spacing(2),
        // [theme.breakpoints.up('sm')]: {
        //     display: 'none',
        // },
    },
    title:{
        flexGrow: 1
    },
    // appBar: {
    //     [theme.breakpoints.up('sm')]: {
    //         width: `calc(100% - ${240}px)`,
    //         marginLeft: 240,
    //     },
    // },
    // menuDrop:{
    //     backgroundColor:primary
    // }
}))

const Navbar = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const classes = useStyles()
    return (
        <div>

        <AppBar className={classes.appBar}>
            <Toolbar>
               

                <div>
      <IconButton color="inherit" aria-label="menu" aria-controls="simple-menu" className={classes.menuButton} aria-haspopup="true" onClick={handleClick}>
        <MenuIcon/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className= {classes.menuDrop}
        bgcolor="primary.main"
      >
        <MenuItem onClick={handleClose} bgcolor="primary.main">Best sellers</MenuItem>
        <MenuItem onClick={handleClose}>New releases</MenuItem>
        <MenuItem onClick={handleClose}>Coming soon</MenuItem>
      </Menu>
    </div>
                

                <Typography variant='h6' className={classes.title}>
                    BookShop
                </Typography>
                <Button variant="text" color="inherit">
                    Login
                </Button>
                <Button variant="text" color="inherit">
                    <ShoppingCartIcon/>
                    Cart
                </Button>
            </Toolbar>
        </AppBar> 
        <div className={classes.offset}></div>
        </div>
    )
}

export default Navbar