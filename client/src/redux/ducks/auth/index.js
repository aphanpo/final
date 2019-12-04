import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'

const LOGIN_PENDING = "auth/LOGIN_PENDING"
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS"
const LOGIN_FAILURE = "auth/LOGIN_FAILURE"
const LOGOUT = "auth/LOGOUT"
const SHELTER_BEDS = "auth/SHELTER_BEDS"
 
const initialState = {
    name: '',
    total_beds: '',
    isAuthenticated: false,
    loading: false
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
        case SHELTER_BEDS:
            return { ...state, total_beds: action.payload}
        default:
            return state
    }
}

function register(name, password, address, email, bed_option, total_beds, meal_option, dispatch) {
    return new Promise((resolve, reject) => {
        axios.post("/register", { name, password, address, email, bed_option, total_beds, meal_option }).then(resp => {
            login(name, password, dispatch).then( ()=> {
                resolve()
            })
        })
        .catch(e => {
            reject()
        })
    })
}

function shelter(name, address, bed_option, open_beds, total_beds, meal_option) {
    return new Promise((resolve, reject) => {
        axios.get("/shelters", {name, address, bed_option, open_beds, total_beds, meal_option}).then(resp => {
            resolve()
        })
        .catch(e => {
            reject()
        })
    })
}

function getTotalBeds(name)  {
    return dispatch => {
        axios.get("/shelterBeds").then(resp => {
            dispatch({
                type: SHELTER_BEDS,
                payload: resp.data
            })
        })
    }
}

function login(name, password, dispatch) {
    return new Promise((resolve, reject) => {
        axios.post("/login", { name, password }).then(resp => {
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
    const name = useSelector(appState => appState.authState.name)
    const address = useSelector(appState => appState.authState.address)
    const bed_option = useSelector(appState => appState.authState.bed_option)
    const total_beds = useSelector(appState => appState.authState.total_beds)
    const open_beds = useSelector(appState => appState.authState.open_beds)
    const meal_option = useSelector(appState => appState.authState.meal_option)
    const isAuthenticated = useSelector(appState => appState.authState.isAuthenticated)
    const dispatch = useDispatch()
    const signin = (name, password) => {
        dispatch({type: LOGIN_PENDING})
        return login(name, password, dispatch)
    }
    const reg = (name, password, address, email, bed_option, open_beds, total_beds, meal_option) => {
        return register(name, password, address, email, bed_option, open_beds, total_beds, meal_option, dispatch)
    }
    const signout = () => dispatch({type: LOGOUT})


    useEffect(() => {
        dispatch(getTotalBeds())
    }, [dispatch])


    return  { isAuthenticated, name, signin, signout, logout, reg, total_beds, bed_option, address, shelter, meal_option, open_beds }
}