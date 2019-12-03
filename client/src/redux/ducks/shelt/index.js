import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

// action definitions
const GET_SHELTERS= "shelt/GET_SHELTERS"

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
const getHouse = () => {
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
export function useHouse() {
  const shelters = useSelector(appState => appState.sheltState.shelters)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHouse())
  }, [dispatch])

  return { shelters }
}