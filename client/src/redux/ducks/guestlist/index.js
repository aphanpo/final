import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

// action definitions
const GET_GUESTLIST = "reservation/GET_GUESTLIST"

// initial state
const initialState = {
    guestlist: []
}

// reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_GUESTLIST:
            return { ...state, guestlist: action.payload }
        default: 
            return state
    }
}

// action creators
const getGuests = () => {
    return dispatch => {
        axios.get("/reservation/guests/").then(resp => {
            dispatch({
                type: GET_GUESTLIST,
                payload: resp.data
            })
            
        })
    }
}

// custom hooks
export function useGuests() {
    const guestlist = useSelector(appState => appState.reservationState.guestlist)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGuests())
    }, [dispatch])
    // const people = () => {
    //     return getGuests()
    // }

    return {guestlist }
}