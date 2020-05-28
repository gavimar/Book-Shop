import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, IconButton, Button} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);



const useStyles = makeStyles(theme => ({

   
        offset: theme.mixins.toolbar,
      

    menuButton: {
        marginRight: theme.spacing(2),
        // [theme.breakpoints.up('sm')]: {
        //     display: 'none',
        // },
    },
    title:{
        flexGrow: 1,
        marginLeft:10
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
                <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <MenuIcon/>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
          <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Best sellers" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
          <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="New releases" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
          <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Coming soon" />
        </StyledMenuItem>
      </StyledMenu>
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