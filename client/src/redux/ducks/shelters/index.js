import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

// action definitions
const GET_SHELTERS= "shelter/GET_SHELTERS"

// initial state
const initialState = {
  shelters: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SHELTERS:
      return { ...state, shelters: action.payload }
    default:
      return state
  }
}

// action creators
const getShelts = () => {
  return dispatch => {
    axios.get('/shelters').then(resp => {
      dispatch({
        type: GET_SHELTERS,
        payload: resp.data
      })
    })
  }
}

// custom hooks
export function useShelts() {
  const shelters = useSelector(appState => appState.shelterState.shelters)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getShelts())
  }, [dispatch])

  return { shelters }
}