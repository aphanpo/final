import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
// import { useEffect } from 'react'

const LOGIN_PENDING = "auth/LOGIN_PENDING"
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS"
const LOGIN_FAILURE = "auth/LOGIN_FAILURE"
const LOGOUT = "auth/LOGOUT"
// const SHELTER_BEDS = "auth/SHELTER_BEDS"
// const GET_RESERVATIONS = "auth/GET_RESERVATIONS"
 
const initialState = {
    id : '',
    name: '',
    total_beds: '',
    isAuthenticated: false,
    loading: false,
    // reservations: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_PENDING:
            return { ...state, loading:true }
        case LOGIN_SUCCESS:
            return { ...state, loading:false, isAuthenticated: true, name: action.payload}
        case LOGIN_FAILURE:
            return { ...state, loading:false, isAuthenticated: false, name: ''}
        case LOGOUT:
            return initialState
        // case SHELTER_BEDS:
        //     return { ...state, total_beds: action.payload}
        // case GET_RESERVATIONS:
        //     return { ...state, reservations: action.payload}
        default:
            return state
    }
}

function register(name, password, address, phone, email, days_open, hours_open, hours_closed, bed_option, open_beds, total_beds, meal_option, dispatch) {
    return new Promise((resolve, reject) => {
        axios.post("/register", { name, password, address, phone, email, days_open, hours_open, hours_closed, bed_option, open_beds, total_beds, meal_option }).then(resp => {
            login(name, password, dispatch).then( ()=> {
                resolve()
            })
        })
        .catch(e => {
            reject()
        })
    })
}
// function getReservations(date, shelter_name) {
//     return dispatch => { 
//       axios.get('/getReservations'/{date, shelter_name}).then(resp => {
//       dispatch({
//         type: GET_RESERVATIONS,
//         payload: resp.data
//       })
//     })}
//   }

function reservation(date, shelter_name, first_name, last_name, Gender, shelter_id) {
    return new Promise((resolve, reject) => {
        axios.post("/reservation", {date, shelter_name, first_name, last_name, Gender, shelter_id }).then(resp => {
            resolve()
        })
        .catch(e => {
            reject()
        })
    })
}

function shelter(name, address, days_open, hours_open, hours_closed, bed_option, open_beds, total_beds, meal_option) {
    return new Promise((resolve, reject) => {
        axios.get("/shelters", {name, address, days_open, hours_open, hours_closed, bed_option, open_beds, total_beds, meal_option}).then(resp => {
            resolve()
        })
        .catch(e => {
            reject()
        })
    })
}

// function getTotalBeds(name)  {
//     return dispatch => {
//         axios.get("/shelterBeds").then(resp => {
//             dispatch({
//                 type: SHELTER_BEDS,
//                 payload: resp.data
//             })
//         })
//     }
// }

function login(name, password, dispatch) {
    return new Promise((resolve, reject) => {
        axios.post("/login", {name, password }).then(resp => {
            
            // getTotalBeds(name).then( () => {
            //     resolve()
            // })
            axios.defaults.headers.common = {
                Authorization: `Bearer ${resp.data.token}`
            }
            dispatch({
                type: LOGIN_SUCCESS,
                payload: name
            })
            // axios.get(`/userInfo/:${name}`).then(resp => {
            //   dispatch({
            //     type: GET_USERINFO,
            //     payload: resp.data
            //   })
            //})
            resolve()
        })
        .catch(e => {
            dispatch({
                type: LOGIN_FAILURE
            })
            reject()
        })
    })    
}

function logout () {
    axios.defaults.headers.common = {
        Authorization: ""
    }
    return {
        type: logout
    }
}

export function useAuth() {
    const id = useSelector(appState => appState.authState.id)
    const name = useSelector(appState => appState.authState.name)
    const address = useSelector(appState => appState.authState.address)
    const bed_option = useSelector(appState => appState.authState.bed_option)
    const phone = useSelector(appState => appState.authState.phone)
    const days_open = useSelector(appState => appState.authState.days_open)
    const hours_open = useSelector(appState => appState.authState.hours_open)
    const hours_closed = useSelector(appState => appState.authState.hours_closed)
    const total_beds = useSelector(appState => appState.authState.total_beds)
    const open_beds = useSelector(appState => appState.authState.open_beds)
    const meal_option = useSelector(appState => appState.authState.meal_option)
    const isAuthenticated = useSelector(appState => appState.authState.isAuthenticated)
    // const reservesProfile = useSelector(appState => appState.authState.reservations)

    // const reserves = (date, shelter_name) =>{
    //     return getReservations(date, shelter_name)
    // } 
    const dispatch = useDispatch()
    const signin = (name, password) => {
        return login(name, password, dispatch)
    }
    
    const reg = (name, password, address, phone, email, days_open, hours_open, hours_closed, bed_option, open_beds, total_beds, meal_option) => {
        return register(name, password, address, phone, email, days_open, hours_open, hours_closed, bed_option, open_beds, total_beds, meal_option, dispatch)
    }

    const res = (date, shelter_name, first_name, last_name, Gender, shelter_id) => {
        return reservation(date, shelter_name, first_name, last_name, Gender, shelter_id)
    }
    const signout = () => dispatch({type: LOGOUT})


    // useEffect(() => {
    //     dispatch(getTotalBeds())
    // }, [dispatch])


    return  { id, isAuthenticated, name, signin, signout, logout, reg, phone, total_beds, bed_option, address, shelter, meal_option, open_beds, res, days_open, hours_open, hours_closed}
}