import axios from 'axios'

// constantes
const dataInicial = {
    array : [],
    offset: 0
}

// types
const GET_BOOK_SUCCESS = 'GET_BOOK_SUCCES'
const NEXT_BOOK_SUCCESS = 'NEXT_BOOK_SUCCESS'

// reducer
export default function bookReducer(state = dataInicial, action){
    switch(action.type){
        case GET_BOOK_SUCCESS:
            return {...state, array: action.payload}
        case NEXT_BOOK_SUCCESS:
            return {...state, array: action.payload.array, offset: action.payload.offset}
        default:
            return state
    }
}

// acciones
export const getBookAction = () => async (dispatch, getState) => {

    // console.log('getState', getState().pokemones.offset)
    const offset = getState().books.offset

    try {
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=crepusculo`)
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
    const siguiente = offset + numero

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
        dispatch({
            type: NEXT_BOOK_SUCCESS,
            payload: {
                array: res.data.items,
                offset: siguiente
            }
        })
    } catch (error) {
        console.log(error)
    }
}