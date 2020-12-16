import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getBookAction,  nextBookAction, previousBookAction, addToCart} from '../../redux/bookDucks';
import BookItem from './BookItem';
import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';

const styles = makeStyles(theme => ({
    listWrapper: {
        margin: '20px',
        marginRight: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
        
    },
    picture: {
        height: '40px',
        width: 'auto'
    },
    listItems: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
}))

const Books = () => {

    const classes = styles()
    const dispatch = useDispatch()

    const books = useSelector(store => store.books.array)

    const onClick = () => dispatch(addToCart()) 
   

    return (
        <div>
            <button onClick={() => dispatch(previousBookAction(10))} >Back</button>
            <button onClick={() => dispatch(nextBookAction(10))} >Next</button>
            <div className= {classes.listWrapper}>
            <div className= {classes.listItems}>
                {
                    books.map(item => (
                        <BookItem
                            title={item.volumeInfo.title}
                            picture={item.volumeInfo.imageLinks.smallThumbnail}
                            onClick={onClick}
                        />
                    ))
                }
                {/* {
                   books.map((value, index) => (<BooksResult key={index} {...value}/>))
                } */}
            </div>
            </div>
        </div>
    )
}

export default Books