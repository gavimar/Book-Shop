import axios from 'axios';

// constantes
const dataInicial = {
    array : [],
    offset: 0, 
    counter: 0
}

// types
const GET_BOOK_SUCCESS = 'GET_BOOK_SUCCES';
const NEXT_BOOK_SUCCESS = 'NEXT_BOOK_SUCCESS';
const PREVIOUS_BOOK_SUCCESS = 'PREVIOUS_BOOK_SUCCESS';
const ADD_TO_CART = 'ADD_TO_CART';

// reducer
export default function bookReducer(state = dataInicial, action){
    switch(action.type){
        case GET_BOOK_SUCCESS:
            return {...state, array: action.payload}
        case NEXT_BOOK_SUCCESS:
            return {...state, array: action.payload.array, offset: action.payload.offset}
        case PREVIOUS_BOOK_SUCCESS:
            return {...state, array: action.payload.array, offset: action.payload.offset}
        case ADD_TO_CART:
            return {...state, counter: action.payload.counter}
        default:
            return state
    }
}

// acciones
export const getBookAction = (inputName) => async (dispatch) => {

    try {
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${inputName}`)
        dispatch({
            type: GET_BOOK_SUCCESS,
            payload: res.data.items
        })
    } catch (error) {
        console.log(error)
    }
}

export const nextBookAction = (numero) => async (dispatch, getState) => {

    // primera alternativa
    const offset = getState().books.offset
    const next = offset + numero

    try {
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=mar&startIndex=${next}`)
        dispatch({
            type: NEXT_BOOK_SUCCESS,
            payload: {
                array: res.data.items,
                offset: next
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const previousBookAction = (numero) => async (dispatch, getState) => {

    // primera alternativa
    const offset = getState().books.offset;
    const next = offset - numero;
    
    try {
        if (offset > 0){
            const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=mar&startIndex=${next}`)
            debugger;
        dispatch({
            type: PREVIOUS_BOOK_SUCCESS,
            payload: {
                array: res.data.items,
                offset: next
            }
        })
        }
    } catch (error) {
        console.log(error);
    }
}

export const addToCart = () => async (dispatch, getState) => {
    const counter = getState().books.counter;
    const newCounter = counter + 1;
    try {
        dispatch({
            type: ADD_TO_CART,
            payload: {
                counter: newCounter
            }
        })
    } catch (error) {
        console.log(error);
    }
}