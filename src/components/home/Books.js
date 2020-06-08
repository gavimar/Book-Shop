import React from 'react';


import {useDispatch, useSelector} from 'react-redux'
import { getBookAction,  nextBookAction} from '../../redux/bookDucks'

const Books = () => {
    const dispatch = useDispatch()

    const books = useSelector(store => store.books.array)

    return (
        <div>
            lista de pokemones
            <button onClick={() => dispatch(getBookAction())}>Get Pokemones</button>
            <button onClick={() => dispatch(nextBookAction(20))} >Siguiente</button>
            <ul>
                {
                    books.map(item => (
                        <li key={item.volumeInfo.title} >{item.volumeInfo.title}</li>
                    ))
                }
                {/* {
                   books.map((value, index) => (<BooksResult key={index} {...value}/>))
                } */}
            </ul>
        </div>
    )
}

export default Books