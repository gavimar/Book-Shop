import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, IconButton, Button} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';

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
}))

const Navbar = (props) => {
    const classes = useStyles()
    return (
        <div>

        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton 
                    color="inherit" 
                    aria-label="menu" 
                    className={classes.menuButton}
                    onClick={() => props.accionAbrir()}
                >
                    <MenuIcon />
                </IconButton>
                

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