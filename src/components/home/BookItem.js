import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    liWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: 'solid 2px',
        borderColor: 'blue',
        width: '200px',
        height: 'auto',
        margin: '20px'
    },
    picture: {
        height: '40px',
        width: 'auto'
    }
    
}))

const BookItem = ({title, picture, onClick}) => {
    const classes = styles()
    const handleOnClick = () => {
        console.log('onclick')
        onClick();
    }

    return(
        <div className={classes.liWrapper} onClick={handleOnClick}>
            {title}
            <div>
            <img src={picture} className={classes.picture}></img>
            </div>
        </div>
    )

};

export default BookItem;