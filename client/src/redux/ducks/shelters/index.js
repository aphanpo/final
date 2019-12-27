import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'


// action definitions
const GET_SHELTERS = "shelter/GET_SHELTERS"
const GET_OTHER_SHELTERS = "shelter/GET_OTHER_SHELTERS"
const CHANGE_BED_COUNT = "shelter/GET_BED_COUNT"
const POST_UPDATE = "shelter/POST_UPDATE"

// initial state
const initialState = {
  shelters: [],
  other_shelters: [],
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SHELTERS:
      return { ...state, shelters: action.payload }
    case GET_OTHER_SHELTERS:
      return { ...state, other_shelters: action.payload}
    case CHANGE_BED_COUNT:
      return { ...state, shelters: state.shelters.map(item => {
        if(item.id === action.id){
          item.open_beds = item.open_beds -1
        }
        return item
      })}
    case POST_UPDATE:
      return { ...state, shelters: action.payload}
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

// const postUpdate = (updateAddress, phone, days_open, hours_open, hours_closed, bed_option, update_open_beds, total_beds, meal_option, name) => {
//   return dispatch => {
//     axios.put('/shelters/updating', {
//       updateAddress, phone, days_open, hours_open, hours_closed, bed_option, update_open_beds, total_beds, meal_option, name
//     }).then(resp => {
//       dispatch({
//         type: POST_UPDATE,
//         payload: resp.data
//       })
//       dispatch(getShelts())
//     })
//   }
// }

function postUpdate(updateAddress, phone, days_open, hours_open, hours_closed, bed_option, update_open_beds, total_beds, meal_option, name, dispatch) {
  console.log(updateAddress, total_beds)
  return new Promise((resolve, reject) => {
    axios.put('/shelters/updating', {
      updateAddress, phone, days_open, hours_open, hours_closed, bed_option, update_open_beds, total_beds, meal_option, name
    }).then(resp=> {
      dispatch({
        type: POST_UPDATE,
        payload:resp.data
      })
      resolve()
    })
    .catch(e => {
      reject()
    })
  })
}

function getBedCount(id){
  return dispatch => {
      dispatch({
        type: CHANGE_BED_COUNT,
        id:id
      })
  }
}
export function reduceBedCount(id, openBeds) {
  axios.get('/shelters/reduce_bed_count?id=' + id + '&beds=' + openBeds).then(resp => {
    //sdjafksldfj
  })
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
  const bed_count = id => dispatch(getBedCount(id))

  const update = (updateAddress, phone, days_open, hours_open, hours_closed, bed_option, update_open_beds, total_beds, meal_option, name, dispatch) =>{
    return postUpdate(updateAddress, phone, days_open, hours_open, hours_closed, bed_option, update_open_beds, total_beds, meal_option, name, dispatch)
  } 

  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(getShelts())
    dispatch(getOtherShelts())
  }, [dispatch])


  return { shelters, other_shelters, bed_count, update}
}

// export function useOtherShelts() {
  
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(getOtherShelts())
//   }, [dispatch])

//   return { other_shelters}
// }