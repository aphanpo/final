import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'


// action definitions
const GET_SHELTERS = "shelter/GET_SHELTERS"
const GET_OTHER_SHELTERS = "shelter/GET_OTHER_SHELTERS"
const GET_BED_COUNT = "shelter/GET_BED_COUNT"

// initial state
const initialState = {
  shelters: [],
  other_shelters: [],
  bed_count: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SHELTERS:
      return { ...state, shelters: action.payload }
    case GET_OTHER_SHELTERS:
      return { ...state, other_shelters: action.payload}
    case GET_BED_COUNT:
      return { ...state, bed_count: action.payload}
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

function getBedCount(){
  return dispatch => {
    axios.get('/bedcount').then(resp => {
      dispatch({
        type: GET_BED_COUNT,
        payload: resp.data
      })
    })
  }
}

 
function getOtherShelts() {
  return dispatch => { 
    axios.get('/shelters/other_shelters').then(resp => {
    dispatch({
      type: GET_OTHER_SHELTERS,
      payload: resp.data
    })
  })}
}

// custom hooks
export function useShelts() {
  const shelters = useSelector(appState => appState.shelterState.shelters)
  const other_shelters = useSelector(appState => appState.shelterState.other_shelters)
  const bed_count = useSelector(appState => appState.shelterState.bed_count)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getShelts())
    dispatch(getOtherShelts())
    dispatch((getBedCount()))
  }, [dispatch])


  return { shelters, other_shelters, bed_count }
}

// export function useOtherShelts() {
  
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(getOtherShelts())
//   }, [dispatch])

//   return { other_shelters}
// }