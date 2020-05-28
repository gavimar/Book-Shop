import {createMuiTheme} from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'



const theme = createMuiTheme({
    palette: {
        secondary:{
            main: purple[500]
        }
    },

    typography: {
        fontFamily: [
          'Roboto',
          'Chelsea Market'
          
        ].join(','),
        
      }

})

export default theme;