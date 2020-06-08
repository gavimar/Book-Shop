import React, {useEffect, useState} from 'react';
import Swiper from "swiper";
import "swiper/css/swiper.css";
import {makeStyles, Typography} from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme();


theme.typography.h4 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5rem',
  },
};

const useStyles = makeStyles(theme => ({

   
  slides: {
    height: 150
  }, 
  slide1:{
    backgroundImage: `url(${"../../images/slide1.jpg"})`
  },

  advert:{
    margin:10,
    fontFamily: 'Libre Baskerville'

  }
}))


const Slides = () => {

  const classes = useStyles()

  let mySwiper: any = null;

  const [active, setActive] = useState(false);
  

  useEffect(() => {
    mySwiper = new Swiper(".swiper-container", {
      speed: 1000,
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
    });
  }, []);
  return(

  <div className={`swiper-slide ${classes.slides }`}>
                <div className={`slider-container ${classes.slides }`}>
                  <div className={`swiper-container ${classes.slides }`}>
                    <div className="swiper-wrapper">
                    {/* <!-- Slides --> */}
             
                      <div className="swiper-slide slide1">
                        <div className="text-container">
                      <Typography variant='h4' className={`text-slides ${classes.advert }`} color="primary" align="center">
                       Best sellers <br></br> this summer</Typography>
                       </div>
                        
                      </div>
                      <div className="swiper-slide slide2">
                      
                      </div>
                    </div>
                  </div>
                  </div>
                  

<div className="swiper-button-prev"></div>
<div className="swiper-button-next"></div>

</div>

  )

}



export default Slides;