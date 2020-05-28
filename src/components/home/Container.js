import React from 'react'
import NavBar from './NavBar'
import Slides from './Slides'

import {
    makeStyles, Hidden
} from '@material-ui/core'
import Menu from './Menu'

const estilos = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar
    
}))



const Container = () => {

    const classes = estilos()
    const [abrir, setAbrir] = React.useState(false)

    const accionAbrir = () => {
        setAbrir(!abrir)
    }

    return (
        <div className={classes.root}>
            <NavBar accionAbrir={accionAbrir} />
            <Hidden xsDown>
                <Menu
                    variant="temporary"
                    open={abrir}
                    onClose={accionAbrir}
                />
            </Hidden>
            <Hidden smUp>
                <Menu
                    variant="temporary"
                    open={abrir}
                    onClose={accionAbrir}
                />
            </Hidden>
            
            <Slides/>
            
        </div>
    )
}

export default Container
